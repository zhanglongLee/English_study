import { MusicModel } from '../model/music';

class Music {
  static async getMusicList() {
    const res = await MusicModel.findAll();
    return res;
  }
  static async addMusic(v) {
    return await MusicModel.create(v);
  }
  static async editMusic(id, v) {
    const music = MusicModel.findByPk(id);
    if (!music) {
      throw new NotFound();
    }

    return await music.update({ ...v });
  }
};

export { Music as MusicDao };