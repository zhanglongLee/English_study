import { InfoCrudMixin } from 'lin-mizar';
import { merge } from 'lodash';
import { Sequelize, Model } from 'sequelize';
import sequelize from '../../lib/db';

class indexBanner extends Model {
  toJSON () {
    const origin = {
      id: this.id,
      title: this.title,
      image: this.image
    };
    return origin;
  }
}

indexBanner.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    image: {
      type: Sequelize.STRING(100),
      allowNull: false
    }
  },
  merge(
    {
      sequelize,
      tableName: 'index_banner',
      modelName: 'index_banner'
    },
    InfoCrudMixin.options
  )
);

export { indexBanner };
