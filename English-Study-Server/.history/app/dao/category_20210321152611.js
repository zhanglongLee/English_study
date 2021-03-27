import { NotFound, Forbidden } from 'lin-mizar';
import { CategoryModel } from '../model/category'
import { Op } from 'sequelize'

class Category {
  // 查看文章列表
  static async getCategoryList(page = 1, size = 5, q) {
    const res = await CategoryModel.findAndCountAll({
      where: {
        category_name: {
          [Op.like]: `%${q}%`
        }
      },
      attributes: {
        exclude: ['deleted_at', 'updated_at']
      },
      limit: Number(size),//长度
      offset: (Number(page) - 1) * Number(size),//当前列表开始值
    });
    return res;
  }
  // 新增文章
  static async createCategory(v) {
    const Category = await CategoryModel.findOne({
      where: {
        category_name: v.category_name
      }
    });
    if (Category) {
      throw new Forbidden({
        code: 10253
      });
    }
    await CategoryModel.create(v);
  }

  // 修改文章
  static async editCategory(id, v) {
    const Category = await CategoryModel.findByPk(id);
    if (!Category) {
      throw new NotFound();
    }

    return await Category.update({ ...v });
  }
  // 删除文章
  static async deleteCategory(id) {
    return CategoryModel.destroy({
      where: { id }
    });
  }
};

export { Category as CategoryDao };