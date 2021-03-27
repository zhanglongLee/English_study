import { LinRouter, NotFound } from 'lin-mizar';
// const { indexBanner } = require("../../model/index/banner");
// const { getSafeParamId } = require("../../lib/util");

const bannerApi = new LinRouter({
  prefix: "/index/banner",
  module: '首页banner图'
});

bannerApi.get("/:id", async ctx => {
  const v = await new PositiveIdValidator().validate(ctx);
  const id = v.get('path.id');
  const banner = await bannerDto.getBanner(id); 
  if(!banner){
    throw new NotFound({
      code:10022
    });
  }
  ctx.json(banner);
});

export {bannerApi};
 