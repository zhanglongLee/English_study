import { Sequelize, Model, DataTypes } from 'sequelize';
import sequelize from '../lib/db';
import { CategoryModel } from './category';

class Listening extends Model {
  
}

Listening.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: '文章标题'
    },
    image: {
      type: DataTypes.STRING(500),
      allowNull: true,
      comment: '文章封面'
    },
    author: {
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: '文章作者'
    },
    published_time: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: '发布时间',
      defaultValue: Sequelize.NOW
    },
    content: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
      comment: '文章正文'
    },
    description: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
      comment: '文章描述'
    },
    is_published: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '是否发布'
    },
    is_comment_enabled: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '是否评论'
    },
    views: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '浏览次数',
      defaultValue: 0
    },
    words: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '文字字数',
      defaultValue: 0
    },
    read_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '阅读时长(分钟)',
      defaultValue: 0
    },
    categoryId: {
      type: DataTypes.BIGINT(20),
      allowNull: true,
      defaultValue: '文章分类'
    },
    is_top: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '是否置顶'
    },
  },
  {
    // 定义表名
    tableName: "article",
    // 定义模型名称
    modelName: "article",
    // 启用软删除
    paranoid: true,
    // 自动写入时间
    timestamps: true,
    // 重名名时间字段
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
    sequelize
  }
);

// 定义外键
Listening.belongsTo(CategoryModel, {
  foreignKey: 'categoryId',
  targetKey: 'id',
});

export { Listening as ListeningModel };
