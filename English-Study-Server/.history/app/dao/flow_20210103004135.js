import { NotFound } from 'lin-mizar';
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
  };

  static async getFlowList() {
    return await FlowModel.findAll({
      order: ['index']
    })
  }

  static async editFlow(id,index,art_id,type,status){
    const flow = await FlowModel.findByPk(id);
    if(!flow){
      throw new NotFound();
    }
    flow.update({id,index,art_id,type,status});
  }
}

export { Flow as FlowDao };