import { LinRouter, config } from 'lin-mizar';
import { groupRequired } from '../../middleware/jwt';
import { logger } from '../../middleware/logger';
import { AddArticleValidator, DeleteArticleValidator, EditArticleValidator } from '../../validator/article';
import { ArticleDao } from '../../dao/article';
import { set, get } from '../../lib/_redis';

const ArticleApi = new LinRouter({
  prefix: '/v1/article'
});

// 1. 权限控制（post => linPost）
// 2. 行为日志（审计）添加logger 例如：logger("{user.username}新增期刊内容")

/**
 * 新增文章
 */
ArticleApi.linPost(
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
ArticleApi.get('/', async ctx => {
  let { page, size, q } = ctx.query;
  // redis key名
  const key = `getArticleList_${q}`;
  let articleList = null;

  // 读取redis缓存
  const cacheResult = await get(key);
  console.log(cacheResult)
  if (cacheResult&&cacheResult.rows.length>0) {
    articleList = cacheResult;
  } else {
    // 如果不存在，直接从数据库读取
    articleList = await ArticleDao.getArticleList(page, size,q);
    console.log(articleList)
    // 将数据库读取到的数据存入缓存 缓存时间单位：s
    set(key, articleList, 60 * 60);
  }

  // 返回结果
  let obj = {};
  // 处理图片地址
  articleList.rows.forEach(item => {
    item.image = `${config.getItem('siteDomain', 'http://localhost')}/assets/${item.image}`;
  })
  obj.page = Number(page)||1;
  obj.size = Number(size)||5;
  obj.total = articleList.count;
  obj.data = articleList.rows;

  ctx.json(obj);
});

/**
 * 编辑文章内容
 */
ArticleApi.linPut(
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
ArticleApi.linDelete(
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

module.exports = { ArticleApi };