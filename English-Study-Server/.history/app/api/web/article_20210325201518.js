import { LinRouter, config } from 'lin-mizar';
import {
  web_loginRequired,
  web_refreshTokenRequiredWithUnifyException,
} from '../../middleware/web_jwt';
import { AddArticleValidator, DeleteArticleValidator, EditArticleValidator } from '../../validator/article';
import { PaginateValidator,PositiveIdValidator } from '../../validator/common'
import { ArticleDao } from '../../dao/article';

const ArticleApi = new LinRouter({
  prefix: '/web/article'
});

/**
 * 通过Id查找文章
 */
ArticleApi.get('/:id', web_loginRequired , async ctx => {
  const v = await new PositiveIdValidator().validate(ctx);
  let { id } = v.get('path');
  var articleList = await ArticleDao.getArticleById(id);
  ctx.json({
    data:articleList
  });
});

module.exports = { ArticleApi };