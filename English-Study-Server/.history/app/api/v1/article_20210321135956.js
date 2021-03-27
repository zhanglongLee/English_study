import { LinRouter, config } from 'lin-mizar';
import { groupRequired } from '../../middleware/jwt';
import { logger } from '../../middleware/logger';
import { AddContentValidator, EditContentValidator, DeleteContentValidator } from '../../validator/content';
import { AddArticleValidator, DeleteArticleValidator, EditArticleValidator } from '../../validator/article'
import { ContentService } from '../../service/content';
import { ArticleDao } from '../../dao/article'

const contentApi = new LinRouter({
  prefix: '/v1/article'
});

// 1. 权限控制（post => linPost）
// 2. 行为日志（审计）添加logger 例如：logger("{user.username}新增期刊内容")

/**
 * 新增文章
 */
contentApi.linPost(
  'addArticle', // 唯一表示
  '/', // URL
  {
    permission: '新增文章', // 权限的名字
    module: '内容管理', // 权限属于哪个模块
    mount: true // 是否在全局的权限列表中显示
  },
  groupRequired,
  logger('{user.username}新增文章'), // logger，参数为日志内容
  async ctx => {
    // 1、校验参数
    const v = await new AddArticleValidator().validate(ctx);
    // 2、处理业务逻辑
    // 3、存入数据库
    await ArticleDao.createArticle(v.get('body'));
    // 4、返回成功
    ctx.success({
      message: '文章新增成功！'
    });
  });

/**
 * 查看文章列表
 */
contentApi.get('/', async ctx => {
  let { page, size } = ctx.query;
  const articleList = await ArticleDao.getArticleList(page, size);
  articleList.forEach(item => {
    // item.image = `${config.getItem('siteDomain', 'http://localhost')}/assets/${this.image}`;
    console.log(item)
  })
  ctx.json({
    page: Number(page),
    size: Number(size),
    data:articleList
  });
});

/**
 * 编辑文章内容
 */
contentApi.linPut(
  'editArticle', // 唯一表示
  '/:id', // URL
  {
    permission: '修改文章内容', // 权限的名字
    module: '内容管理', // 权限属于哪个模块
    mount: true // 是否在全局的权限列表中显示
  },
  groupRequired,
  logger('{user.username}修改文章内容'), // logger，参数为日志内容
  async ctx => {
    const v = await new EditArticleValidator().validate(ctx);
    const id = v.get('path.id');
    const params = v.get('body');
    await ArticleDao.editArticle(id, params);
    ctx.success({
      message: '文章内容修改成功！'
    });
  });

/**
 * 删除文章
 */
contentApi.linDelete(
  'deleteArticle', // 唯一表示
  '/:id', // URL
  {
    permission: '删除文章', // 权限的名字
    module: '内容管理', // 权限属于哪个模块
    mount: true // 是否在全局的权限列表中显示
  },
  groupRequired,
  logger('{user.username}删除文章'), // logger，参数为日志内容
  async ctx => {
    const v = await new DeleteArticleValidator().validate(ctx);
    const id = v.get('path.id');
    await ArticleDao.deleteArticle(id);
    ctx.success({
      message: '文章删除成功！'
    });
  });

module.exports = { contentApi };