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
CommentApi.get('/:article_id' , async ctx => {
  const v = await new PositiveIdValidator().validate(ctx);
  let { article_id } = v.get('path');
  var commentList = await CommentDao.getArticleComment(article_id);
  ctx.json({
    data:commentList
  });
});


module.exports = { CommentApi };