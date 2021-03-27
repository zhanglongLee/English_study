import { LinRouter } from 'lin-mizar';

const articleApi = new LinRouter({
  prefix: "/leeArticle",
  module: '文章'
});

articleApi.get("/list", async ctx => {
  ctx.json({
    message: "获取文章列表"
  });
});
articleApi.post("/add", async ctx => {
  ctx.json({
    message: "获取文章列表"
  });
});

export {articleApi};
 