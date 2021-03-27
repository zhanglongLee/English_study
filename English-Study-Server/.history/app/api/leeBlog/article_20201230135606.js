import { LinRouter } from 'lin-mizar';

const articleApi = new LinRouter({
  prefix: "/leeBlog/article",
  module: '文章'
});

articleApi.post("/", async ctx => {
  // 1、校验参数
  // 2、处理业务逻辑
  // 3、插入数据库
  // 4、提示插入成功
  ctx.json({
    message: "添加文章"
  });
});


export {articleApi};
 