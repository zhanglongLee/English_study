import { MusicModel } from '../model/music';

class Music {
  static async getMusicList() {
    const res = await MusicModel.findAll();
    return res;
  }
  static async addMusic(v) {
    return await MusicModel.create(v);
  }
};

export { Music as MusicDao };