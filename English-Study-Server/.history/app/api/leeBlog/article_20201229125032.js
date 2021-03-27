import { LinRouter } from 'lin-mizar';

const articleApi = new LinRouter({
  prefix: "/leeBlog",
  module: '商店'
});

articleApi.get("/list", async ctx => {
  ctx.json({
    message: "获取博客列表"
  });
});

export {articleApi};
 