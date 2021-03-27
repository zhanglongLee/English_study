import { LinRouter } from 'lin-mizar';
const { indexBanner } = require("../../models/index/banner");
const { getSafeParamId } = require("../../libs/util");

const bannerApi = new LinRouter({
  prefix: "/index/banner",
  module: '首页banner图'
});

bannerApi.get("/:id", async ctx => {
  const v = await new PositiveIdValidator().validate(ctx);
  const id = v.get('path.id');
  const book = await 
  ctx.json({
    message: "hello, I am a index banner"
  });
});

export {bannerApi};
 