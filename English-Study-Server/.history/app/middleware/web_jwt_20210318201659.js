import {
  NotFound,
  AuthFailed,
  parseHeader,
  RefreshException,
  TokenType,
  routeMetaInfo
} from 'lin-mizar';
/**
 * 将 user 挂在 ctx 上
 */
async function mountUser(ctx) {
  const { identity } = parseHeader(ctx);
  const user = await UserModel.findByPk(identity);
  if (!user) {
    throw new NotFound({
      code: 10021
    });
  }
  // 将user挂在ctx上
  ctx.currentUser = user;
}

/**
 * 守卫函数，用户登陆即可访问
 */
async function loginRequired(ctx, next) {
  if (ctx.request.method !== 'OPTIONS') {
    await mountUser(ctx);

    await next();
  } else {
    await next();
  }
}

/**
 * 守卫函数，用户刷新令牌，统一异常
 */
async function refreshTokenRequiredWithUnifyException(ctx, next) {
  if (ctx.request.method !== 'OPTIONS') {
    try {
      const { identity } = parseHeader(ctx, TokenType.REFRESH);
      const user = await UserModel.findByPk(identity);
      if (!user) {
        ctx.throw(
          new NotFound({
            code: 10021
          })
        );
      }
      // 将user挂在ctx上
      ctx.currentUser = user;
    } catch (error) {
      throw new RefreshException();
    }
    await next();
  } else {
    await next();
  }
}