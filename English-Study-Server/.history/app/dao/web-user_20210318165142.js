import { RepeatException, generate } from 'lin-mizar';
import { UserModel, UserIdentityModel } from '../model/web-user';

import sequelize from '../lib/db';
import { IdentityType } from '../lib/type';

class UserDao {
  async createUser (v) {
    let user = await UserModel.findOne({
      where: {
        username: v.get('body.username')
      }
    });
    // 如果存在该用户名，提示用户名已存在
    if (user) {
      throw new RepeatException({
        code: 10071
      });
    }
    // 如果存在该邮箱，提示邮箱已存在
    if (v.get('body.email') && v.get('body.email').trim() !== '') {
      user = await UserModel.findOne({
        where: {
          email: v.get('body.email')
        }
      });
      if (user) {
        throw new RepeatException({
          code: 10076
        });
      }
    }
    await this.registerUser(v);
  }

  async updateUser (ctx, v) {
    const user = ctx.currentUser;
    if (v.get('body.username') && user.username !== v.get('body.username')) {
      const exit = await UserModel.findOne({
        where: {
          username: v.get('body.username')
        }
      });
      if (exit) {
        throw new RepeatException({
          code: 10071
        });
      }
      user.username = v.get('body.username');
    }
    if (v.get('body.email') && user.email !== v.get('body.email')) {
      const exit = await UserModel.findOne({
        where: {
          email: v.get('body.email')
        }
      });
      if (exit) {
        throw new RepeatException({
          code: 10076
        });
      }
      user.email = v.get('body.email');
    }
    if (v.get('body.nickname')) {
      user.nickname = v.get('body.nickname');
    }
    if (v.get('body.avatar')) {
      user.avatar = v.get('body.avatar');
    }
    await user.save();
  }

  async registerUser (v) {
    let transaction;
    try {
      transaction = await sequelize.transaction();
      // 用户对象
      const user = {
        username: v.get('body.username')
      };
      if (v.get('body.email') && v.get('body.email').trim() !== '') {
        // 邮箱
        user.email = v.get('body.email');
      }
      const { id: user_id } = await UserModel.create(user, {
        transaction
      });
      await UserIdentityModel.create(
        {
          user_id,
          identity_type: IdentityType.Password,
          identifier: user.username,
          credential: generate(v.get('body.password'))
        },
        {
          transaction
        }
      );

      await transaction.commit();
    } catch (error) {
      if (transaction) await transaction.rollback();
    }
    return true;
  }

  // 获取用户信息
  async getInformation (v) {
    const userInfo = await UserModel.findAll({
      where: {
        username: v.get('body.username')
      }
    });
    return userInfo;
  }

  // 更新用户信息
  async updateInformation (ctx,v) {
    const user = ctx.currentUser = await this.getInformation(v);

    if (v.get('body.email') && user.email !== v.get('body.email')) {
      const exit = await UserModel.findOne({
        where: {
          email: v.get('body.email')
        }
      });
      if (exit) {
        throw new RepeatException({
          code: 10076
        });
      }
      user.email = v.get('body.email');
    }
    if (v.get('body.nickname')) {
      user.nickname = v.get('body.nickname');
    }
    console.log(user)
    return true


  }
}

export { UserDao };
