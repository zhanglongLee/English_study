import { NotFound } from 'lin-mizar';
import { MovieModel } from '../model/movie';

class Movie {

  static async getList() {
    const res = await MovieModel.findAll();
    return res;
  }

  static async add(v) {
    return await MovieModel.create(v);
  }

  static async edit(id, v) {
    const movie = await MovieModel.findByPk(id);
    if (!movie) {
      throw new NotFound();
    }

    return await movie.update({ ...v });
  }

  static async deleteById(id) {
    return MovieModel.destroy({
      where: { id }
    });
  }
  static async findOne(title){
    return MovieModel.findOne({
      where: { title }
    });
  }
};

export { Movie as MovieDao };