import { NotFound,Forbidden } from 'lin-mizar';
import { CommentModel } from '../model/comment';
import { ArticleModel } from '../model/article'
import { Op } from 'sequelize'

class Comment {

  static async getArticleComment(article_id,parent_comment_id=-1){
    const commentList = await this.getCommentById(article_id,parent_comment_id)
    commentList.forEach(i => {
      i.children = []
    });
    commentList.forEach(async commentItem => {
      var comment = await this.getCommentById(article_id,commentItem.id)
      commentItem.children = comment
    });
    return commentList
  }

  /**
   * 通过文章id，父级id查询评论列表
   * @param {BigInteger} article_id 
   * @param {BigInteger} parent_comment_id 
   * @returns 
   */
  static async getCommentById(article_id,parent_comment_id){
    const res = await CommentModel.findAll({
      where:{
        article_id,
        parent_comment_id
      },
      attributes: {
        exclude: ['deleted_at', 'updated_at']
      },
      include: [{
        model: ArticleModel,
      }],
    });
    // if(!res){
    //   throw new Forbidden({
    //     code: 10258
    //   });
    // }
    return res
  }

  // 查看评论列表
  static async getCommentList(page = 1, size = 5,q) {
    if(q){
      var whereObj = {
        title: {
          [Op.like]: `%${q}%`
        }
      };
    }
    const res = await CommentModel.findAndCountAll({
      where: whereObj,
      attributes: {
        exclude: ['deleted_at', 'updated_at']
      },
      limit: Number(size),//长度
      offset: (Number(page) - 1) * Number(size),//当前列表开始值
      include: [{ // include关键字表示关联查询
        model: ArticleModel,
        // attributes: [['category_name', 'name']],
      }],
      // raw: true // 这个属性表示开启原生查询，原生查询支持的功能更多，自定义更强
    });
    return res;
  }
  // 新增评论
  static async createComment(v) {
    await CommentModel.create(v);
  }

  // 修改评论
  static async editComment(id, v) {
    const article = await CommentModel.findByPk(id);
    if (!article) {
      throw new NotFound();
    }

    return await article.update({ ...v });
  }
  // 删除评论
  static async deleteComment(id) {
    return CommentModel.destroy({
      where: { id }
    });
  }

};

export { Comment as CommentDao };