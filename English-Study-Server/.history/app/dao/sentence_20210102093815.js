import { SentenceModel } from '../model/sentence';

class Sentence {
  static async getSentenceList() {
    SentenceModel.findAll();
  }
  static async addSentence(v) {
    return await SentenceModel.create(v);
  }
};

export { Sentence as SentenceDao };