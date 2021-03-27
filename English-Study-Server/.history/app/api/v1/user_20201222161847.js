import { LinRouter } from 'lin-mizar';

const shopApi = new LinRouter({
  prefix: "/v1/shop",
  module: '商店'
});

shopApi.get("/", async ctx => {
  ctx.json({
    message: "hello, I am a shop"
  });
});

export {shopApi};
 