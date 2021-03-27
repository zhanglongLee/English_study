import { SentenceModel } from '../model/sentence';
import { NotFound } from 'lin-mizar';

class Sentence {
  static async getSentenceList() {
    const res = await SentenceModel.findAll();
    return res;
  }
  static async addSentence(v) {
    return await SentenceModel.create(v);
  }
  static async editSentence(id, v) {
    const sentence = await SentenceModel.findByPk(id);
    if (!sentence) {
      throw new NotFound();
    }

    return await sentence.update({ ...v });
  }
};

export { Sentence as SentenceDao };