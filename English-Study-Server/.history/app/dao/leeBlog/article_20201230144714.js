import { ArticleModel } from '../../model/leeBlog/article';

class Article {
  static async addArticle(v){
    return await ArticleModel.create(v);
  }
}