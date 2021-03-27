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
CommentApi.get('/:id' ,async ctx => {
  const v = await new PositiveIdValidator().validate(ctx);
  let { id } = v.get('path');
  var commentList = CommentDao.getArticleComment(id);
  ctx.json({
    data:commentList
  });
});


module.exports = { CommentApi };