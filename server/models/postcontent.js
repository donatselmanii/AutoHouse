'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PostContent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PostContent.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    condition: DataTypes.STRING,
    sold: DataTypes.BOOLEAN,
    number_of_views: DataTypes.INTEGER,
    seats: DataTypes.INTEGER,
    color: DataTypes.STRING,
    photo_360Blob: DataTypes.BLOB,
    id_extras: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PostContent',
  });
  return PostContent;
};