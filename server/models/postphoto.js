'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PostPhoto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PostPhoto.init({
    id_post: DataTypes.INTEGER,
    id_photo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PostPhoto',
  });
  return PostPhoto;
};