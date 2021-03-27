import { LinRouter } from 'lin-mizar';

const userApi = new LinRouter({
  prefix: "/v1/user",
  module: '用户'
});

userApi.get("/", async ctx => {
  ctx.json({
    message: "hello, I am a user"
  });
});

export {userApi};
 