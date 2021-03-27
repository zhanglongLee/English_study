import { MusicModel } from '../model/music';
import { NotFound } from 'lin-mizar';

class Music {
  static async getList() {
    const res = await MusicModel.findAll();
    return res;
  }
  static async add(v) {
    return await MusicModel.create(v);
  }
  static async edit(id, v) {
    const music = await MusicModel.findByPk(id);
    if (!music) {
      throw new NotFound();
    }

    return await music.update({ ...v });
  }
  static async deleteById(id) {
    return MusicModel.destroy({
      where: { id }
    });
  }
  static async findOne(title){
    return MovieModel.findOne({
      where: { title }
    });
  }
};

export { Music as MusicDao };