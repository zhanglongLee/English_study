import { MusicModel } from '../model/music';
import { NotFound } from 'lin-mizar';

class Music {
  static async getMusicList() {
    const res = await MusicModel.findAll();
    return res;
  }
  static async addMusic(v) {
    return await MusicModel.create(v);
  }
  static async editMusic(id, v) {
    const music = await MusicModel.findByPk(id);
    if (!music) {
      throw new NotFound();
    }

    return await music.update({ ...v });
  }
  static async deleteMusicById(id) {
    return MusicModel.destroy({
      where: { id }
    });
  }
};

export { Music as MusicDao };