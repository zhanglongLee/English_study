import { RepeatException, generate } from 'lin-mizar';
import { UserDoneListening } from '../model/user-listening';

import sequelize from '../lib/db';
import { IdentityType } from '../lib/type';

class UserLearningDao {

  // 新增用户做题记录
  async createUserLearning(ctx, v) {
    // 记录查询到的用户信息
    const user = ctx.currentUser;
    if (!user) {
      throw new NotFound({
        code: 10021
      });
    }
    
    let webUserId = user.id
    let { learningId , history_answer } = v.get('body')
    let obj = {
      webUserId,
      learningId,
      history_answer
    }
    const userDone = await UserDoneListening.findOne({
      where:{
        learningId,
        webUserId
      }
    })
    // 存在则修改做题记录
    if(userDone){
      userDone.history_answer = history_answer
      await userDone.save()
    }
    // 创建做题记录
    await UserDoneListening.create(obj)
  }

  // 删除用户做题记录
  async deleteUserLearning(ctx, v) {
    // 记录查询到的用户信息
    const user = ctx.currentUser;
    if (!user) {
      throw new NotFound({
        code: 10021
      });
    }
    
    let webUserId = user.id
    let { learningId } = v.get('body')
    const userDone = await UserDoneListening.findOne({
      where:{
        learningId,
        webUserId
      }
    })
    await userDone.destroy()
  }

  // 注册用户
  async createUser(v) {
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
    await this.registerUser(v);
  }
  // 用户信息分别写入web_user web_user_identity表
  async registerUser(v) {
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
  async getInformation(ctx) {
    const user = ctx.currentUser
    const userInfo = await UserModel.findAll({
      where: {
        id: user.id
      }
    });
    return userInfo;
  }

  // 更新用户信息
  async updateInformation(ctx, v) {
    // 记录查询到的用户信息
    const user = ctx.currentUser;
    if (!user) {
      throw new NotFound({
        code: 10021
      });
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
    if (v.get('body.nickname') && user.nickname !== v.get('body.nickname')) {
      const exit = await UserModel.findOne({
        where: {
          nickname: v.get('body.nickname')
        }
      });
      if (exit) {
        throw new RepeatException({
          code: 10251
        });
      }
      user.nickname = v.get('body.nickname');
    }
    await user.save()
  }

  // 修改密码
  async changePassWord(ctx, v) {

  }
}

export { UserLearningDao };
