import { FlowModel } from '../model/flow';
class Flow {
  static async createFlow(v) {
    const res = await FlowModel.create({
      index: v.get('body.index'),
      type: v.get('body.type'),
      art_id: v.get('body.art_id'),
      status: v.get('body.status'),
    });
    return res;
  }
}

export { Flow as FlowDao };