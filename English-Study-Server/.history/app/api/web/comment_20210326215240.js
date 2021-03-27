import { LinRouter, config } from 'lin-mizar';
import {
  web_loginRequired,
  web_refreshTokenRequiredWithUnifyException,
} from '../../middleware/web_jwt';
import { PaginateValidator,PositiveIdValidator } from '../../validator/common'
import { CommentDao } from '../../dao/comment';

const CommentApi = new LinRouter({
  prefix: '/web/comment'
});

/**
 * 通过文章id查找评论列表
 */
CommentApi.get('/:id' , async ctx => {
  const v = await new PositiveIdValidator().validate(ctx);
  let { id } = v.get('path');
  // var commentList = await CommentDao.getArticleComment(id);
  const commentList = await CommentDao.getCommentById(id,parent_comment_id)
  commentList.forEach(async commentItem => {
    var comment = await CommentDao.getCommentById(id,commentItem.id)
    setTimeout(() => {
      commentItem.children = comment
      console.log(JSON.stringify(commentItem.children))
    }, 0);
  });
  ctx.json({
    data:commentList
  });
});


module.exports = { CommentApi };