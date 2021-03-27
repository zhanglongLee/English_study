import { NotFound, Forbidden } from 'lin-mizar';
import Sequelize from 'sequelize';
import { banner } from '../../model/index/banner';

class BannerDao {
  async getBanner (id) {
    const banner = await banner.findOne({
      where: {
        id
      }
    });
    return banner;
  }

  async getBookByKeyword (q) {
    const banner = await banner.findOne({
      where: {
        title: {
          [Sequelize.Op.like]: `%${q}%`
        }
      }
    });
    return banner;
  }

  async getBooks () {
    const books = await banner.findAll();
    return books;
  }

  async createBook (v) {
    const banner = await banner.findOne({
      where: {
        title: v.get('body.title')
      }
    });
    if (banner) {
      throw new Forbidden({
        code: 10240
      });
    }
    const bk = new banner();
    bk.title = v.get('body.title');
    bk.author = v.get('body.author');
    bk.summary = v.get('body.summary');
    bk.image = v.get('body.image');
    await bk.save();
  }

  async updateBook (v, id) {
    const banner = await banner.findByPk(id);
    if (!banner) {
      throw new NotFound({
        code: 10022
      });
    }
    banner.title = v.get('body.title');
    banner.author = v.get('body.author');
    banner.summary = v.get('body.summary');
    banner.image = v.get('body.image');
    await banner.save();
  }

  async deleteBook (id) {
    const banner = await banner.findOne({
      where: {
        id
      }
    });
    if (!banner) {
      throw new NotFound({
        code: 10022
      });
    }
    banner.destroy();
  }
}

export { BannerDao };
