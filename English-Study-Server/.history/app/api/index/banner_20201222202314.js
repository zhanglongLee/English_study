import { LinRouter, NotFound } from 'lin-mizar';
import { PositiveIdValidator } from '../../validator/common';
import { BannerDao } from '../../dao/index/banner';
// const { indexBanner } = require("../../model/index/banner");
// const { getSafeParamId } = require("../../lib/util");

const bannerApi = new LinRouter({
  prefix: "/index/banner",
  module: '首页banner图'
});
// book 的dao 数据库访问层实例
const BannerDao = new BannerDao();
bannerApi.get("/:id", async ctx => {
  // 校验id
  const v = await new PositiveIdValidator().validate(ctx);
  // 获取id
  const id = v.get('path.id');
  // 通过id查询数据库
  const banner = await BannerDao.getBanner(id); 
  if(!banner){
    throw new NotFound({
      code:10022
    });
  }
  ctx.json(banner);
});

export {bannerApi};
 