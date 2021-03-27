import { NotFound, Forbidden } from 'lin-mizar';
import { ListeningModel } from '../model/listening';
import { UserDoneListening } from '../model/user-listening';
import { UserModel } from '../model/web-user';
import { CategoryModel } from '../model/category'
import { Op } from 'sequelize'

class Listening {
  static async test() {
    var a = await UserDoneListening.findAll({
      include: [
        { // include关键字表示关联查询
          model: UserModel,
          // attributes: ['username'],
        },
        { // include关键字表示关联查询
          model: ListeningModel,
          // attributes: ['title'],
        }
      ],
    });
    return a;
  }
  // 查看听力练习列表
  static async getListeningList(page = 1, size = 5, q) {

    if (q) {
      var whereObj = {
        title: {
          [Op.like]: `%${q}%`
        }
      };
    }
    const res = await ListeningModel.findAndCountAll({
      where: whereObj,
      attributes: {
        exclude: ['deleted_at', 'updated_at']
      },
      limit: Number(size),//长度
      offset: (Number(page) - 1) * Number(size),//当前列表开始值
      include: [
        { // include关键字表示关联查询
          model: CategoryModel,
          attributes: [['category_name', 'name']],
        }
      ],
      // raw: true // 这个属性表示开启原生查询，原生查询支持的功能更多，自定义更强
    });
    return res;
  }
  // 新增听力练习
  static async createListening(v) {
    const article = await ListeningModel.findOne({
      where: {
        title: v.title
      }
    });
    if (article) {
      throw new Forbidden({
        code: 10240
      });
    }
    await ListeningModel.create(v);
  }

  // 修改听力练习
  static async editListening(id, v) {
    const article = await ListeningModel.findByPk(id);
    if (!article) {
      throw new NotFound();
    }

    return await article.update({ ...v });
  }
  // 删除听力练习
  static async deleteListening(id) {
    return ListeningModel.destroy({
      where: { id }
    });
  }
  // 关键词查找
  // static async getListeningByKeyword (q) {
  //   const article = await ListeningModel.findOne({
  //     where: {
  //       title: {
  //         [Op.like]: `%${q}%`
  //       }
  //     }
  //   });
  //   return article;
  // }
};

export { Listening as ListeningDao };