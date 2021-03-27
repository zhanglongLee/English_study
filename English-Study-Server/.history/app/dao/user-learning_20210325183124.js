import { NotFound } from 'lin-mizar';
import { UserListening } from '../model/user-listening';

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
    const userDone = await UserListening.findOne({
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
    await UserListening.create(obj)
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
    const userDone = await UserListening.findOne({
      where:{
        learningId,
        webUserId
      }
    })
    if (!userDone) {
      throw new NotFound({
        code: 10257
      });
    }
    userDone.destroy()
  }
}

export { UserLearningDao };
