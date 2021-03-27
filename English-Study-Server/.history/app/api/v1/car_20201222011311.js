import { LinRouter } from 'lin-mizar';

const carApi = new LinRouter({
  prefix: "/v1/car",
  module: '车'
});

carApi.get("/:id", async ctx => {
  ctx.json({
    message: "hello，car!"
  })
});

export { carApi };