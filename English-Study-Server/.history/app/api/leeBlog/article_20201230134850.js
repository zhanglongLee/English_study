import { LinRouter } from 'lin-mizar';

const articleApi = new LinRouter({
  prefix: "/leeBlog/article",
  module: '文章'
});

articleApi.post("/", async ctx => {
  ctx.json({
    message: "获取文章列表"
  });
});


export {articleApi};
 