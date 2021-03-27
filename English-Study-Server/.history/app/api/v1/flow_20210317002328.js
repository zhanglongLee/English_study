import { LinRouter } from 'lin-mizar';
import { FlowDao } from '../../dao/flow';
import { groupRequired } from '../../middleware/jwt';
import { logger } from '../../middleware/logger';
import { FlowService } from '../../service/flow';
import { AddFlowValidator, EditFlowValidator, DeleteFlowValidator } from '../../validator/flow';

const flowApi = new LinRouter({
  prefix: '/v1/flow'
});

// 1. 权限控制（post => linPost）
// 2. 行为日志（审计）添加logger 例如：logger("{user.username}新增期刊内容")

/**
 * 新增最新期刊
 */
flowApi.linPost(
  'addFlow',
  '/',
  {
    permission: '新增最新期刊', // 权限的名字
    module: '最新期刊管理', // 权限属于哪个模块
    mount: true // 是否在全局的权限列表中显示
  },
  groupRequired,
  logger('{user.username}新增最新期刊'), // logger，参数为日志内容
  async ctx => {
    const v = await new AddFlowValidator().validate(ctx);
    await FlowDao.createFlow(v);
    ctx.success({
      message: '最新期刊新增成功！'
    });
  });

/**
 * 获取最新期刊
 */
flowApi.get('/', async ctx => {
  // 1.flow
  // 2.根据结果里面的art_id、type字段去响应类型的期刊内容
  // 3.格式化数据
  // 4.返回数据

  const flowList = await FlowService.getFlowList();
  ctx.json(flowList);
});

/**
 * 编辑最新期刊
 */
flowApi.linPut(
  'editFlow', // 唯一表示
  '/:id', // URL
  {
    permission: '编辑最新期刊', // 权限的名字
    module: '最新期刊管理', // 权限属于哪个模块
    mount: true // 是否在全局的权限列表中显示
  },
  groupRequired,
  logger('{user.username}修改最新期刊'), // logger，参数为日志内容
  async ctx => {
    const v = await new EditFlowValidator().validate(ctx);
    const id = v.get('path.id');
    const { index, type, art_id, status } = v.get('body');
    await FlowDao.editFlow(id, index, art_id, type, status);
    ctx.success({
      message: '最新期刊修改成功！'
    });
  });

/**
 * 最新期刊内容删除
 */
flowApi.linDelete(
  'deleteFlow', // 唯一表示
  '/:id', // URL
  {
    permission: '最新期刊内容删除', // 权限的名字
    module: '最新期刊管理', // 权限属于哪个模块
    mount: true // 是否在全局的权限列表中显示
  },
  groupRequired,
  logger('{user.username}最新期刊内容删除'), // logger，参数为日志内容
  async ctx => {
    const v = await new DeleteFlowValidator().validate(ctx);
    const id = v.get('path.id');
    await FlowDao.deleteFlow(id);
    ctx.success({
      message: '最新期刊内容删除成功！'
    });
  });
module.exports = { flowApi };