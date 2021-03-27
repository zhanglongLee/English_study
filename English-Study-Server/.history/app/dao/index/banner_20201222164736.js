import { NotFound, Forbidden } from 'lin-mizar';
import Sequelize from 'sequelize';
import { Banner } from '../../model/index/banner';

class BannerDao {
  async getBanner (id) {
    const banner = await Banner.findOne({
      where: {
        id
      }
    });
    return banner;
  }
}

export { BannerDao };
