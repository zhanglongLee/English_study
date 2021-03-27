import { SentenceModel } from '../model/sentence';
import { NotFound } from 'lin-mizar';

class Sentence {
  static async getList() {
    const res = await SentenceModel.findAll();
    return res;
  }
  static async add(v) {
    return await SentenceModel.create(v);
  }
  static async edit(id, v) {
    const sentence = await SentenceModel.findByPk(id);
    if (!sentence) {
      throw new NotFound();
    }

    return await sentence.update({ ...v });
  }

  static async deleteById(id) {
    return SentenceModel.destroy({
      where: { id }
    });
  }
  static async findOne(title){
    return SentenceModel.findOne({
      where: { title }
    });
  }
};

export { Sentence as SentenceDao };