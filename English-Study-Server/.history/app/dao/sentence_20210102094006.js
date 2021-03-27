import { SentenceModel } from '../model/sentence';

class Sentence {
  static async getSentenceList() {
    const res = await SentenceModel.findAll();
    return res;
  }
  static async addSentence(v) {
    return await SentenceModel.create(v);
  }
};

export { Sentence as SentenceDao };