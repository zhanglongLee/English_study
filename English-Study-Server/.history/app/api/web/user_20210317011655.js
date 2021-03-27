import { LinRouter, getTokens } from 'lin-mizar';
import {
  RegisterValidator,
  LoginValidator,
  UpdateInfoValidator,
  ChangePasswordValidator
} from '../../validator/web-user';

import {
  loginRequired,
  refreshTokenRequiredWithUnifyException
} from '../../middleware/jwt';
import { UserIdentityModel } from '../../model/web-user';
import { logger } from '../../middleware/logger';
import { UserDao } from '../../dao/web-user';

const user = new LinRouter({
  prefix: '/web/user',
  module: '用户',
  // 用户权限暂不支持分配，开启分配后也无实际作用
  mountPermission: false
});

const userDao = new UserDao();
// 注册接口
user.post('/register', logger('新建了一个用户'), async ctx => {
  const v = await new RegisterValidator().validate(ctx);
  await userDao.createUser(v);
  ctx.success({
    code: 11
  });
});
// 登录接口
user.post('/login', logger('登录'), async ctx => {
  const v = await new LoginValidator().validate(ctx);
  const user = await UserIdentityModel.verify(
    v.get('body.username'),
    v.get('body.password')
  );
  console.log(user);
  ctx.json({ a: 1 });
  // const { accessToken, refreshToken } = getTokens({
  //   id: user.user_id
  // });
  // ctx.json({
  //   access_token: accessToken,
  //   refresh_token: refreshToken
  // });
});

export { user };
