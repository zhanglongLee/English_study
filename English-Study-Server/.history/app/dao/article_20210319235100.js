import { NotFound } from 'lin-mizar';
import { ArticleModel } from '../model/article';

class Article {

  static async getList() {
    const res = await ArticleModel.findAll();
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
  

  static async edit(id, v) {
    const movie = await ArticleModel.findByPk(id);
    if (!movie) {
      throw new NotFound();
    }

    return await movie.update({ ...v });
  }

  static async deleteArticle(id) {
    return ArticleModel.destroy({
      where: { id }
    });
  }
  static async findOne(title){
    return ArticleModel.findOne({
      where: { title }
    });
  }
};

export { Article as ArticleDao };