import { LinRouter } from 'lin-mizar';

const bannerApi = new LinRouter({
  prefix: "/index/banner",
  module: '首页banner图'
});

bannerApi.get("/", async ctx => {
  ctx.json({
    message: "hello, I am a index banner"
  });
});

export {bannerApi};
 