import { NotFound } from 'lin-mizar';
import { ArticleModel } from '../model/article';
import { CategoryModel } from '../model/category';

class Article {
  // 查看文章列表
  static async getArticleList(page=1, size=5) {
    const res = await ArticleModel.findAndCountAll({
      limit: Number(size),
      offset: Number(page),
    });
    ArticleModel.query(`select * from article;`)
    return res;
  }
  // 新增文章
  static async createArticle(v) {
    const article = await ArticleModel.findOne({
      where: {
        title: v.title
      }
    });
    if (article) {
      throw new Forbidden({
        code: 10240
      });
    }
    await ArticleModel.create(v);
  }

  // 修改文章
  static async editArticle(id, v) {
    const article = await ArticleModel.findByPk(id);
    if (!article) {
      throw new NotFound();
    }

    return await article.update({ ...v });
  }
  // 删除文章
  static async deleteArticle(id) {
    return ArticleModel.destroy({
      where: { id }
    });
  }
  // 单一查找
  static async findOne(title) {
    return ArticleModel.findOne({
      where: { title }
    });
  }
};

export { Article as ArticleDao };