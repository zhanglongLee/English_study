import { MusicModel } from '../model/music';

class Music {
  static async getMusicList() {
    MusicModel.findAll();
  }
  static async addMusic(v) {
    return await MusicModel.create(v);
  }
};

export { Music as MusicDao };