import { InfoCrudMixin } from 'lin-mizar';
import { merge } from 'lodash';
import { Sequelize, Model } from 'sequelize';
import sequelize from '../../lib/db';

class Article extends Model {
  toJSON () {
    const origin = {
      id: this.id,
      title: this.title,
      content: this.content,
      zan: this.zan
    };
    return origin;
  }
}

Article.init(
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
    content: {
      type: Sequelize.STRING(1000),
      allowNull: false,
    },
    date: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    zan: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue:0
    }
  },
  {
    // 定义表名
    tableName:"article",
    // 定义模型名称
    modelName:"Article",
    // 启用软删除
    paranoid:true,
    // 自动写入时间
    timestamps:true,
    // 重命名时间字段
    createAt:"create_at",
    updateAt:"update_at",
    deletedAt:"deleted_at",
    sequelize
  }
);

export { Article };
