'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Business extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Business.init({
    name: DataTypes.STRING,
    logo_photo: DataTypes.BLOB,
    cover_photo: DataTypes.BLOB,
    location: DataTypes.STRING,
    contact_number: DataTypes.INTEGER,
    description: DataTypes.STRING,
    reviews: DataTypes.DECIMAL,
    number_of_views: DataTypes.INTEGER,
    social_media_links: DataTypes.JSON,
    id_user: DataTypes.INTEGER,
    id_businesstype: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Business',
  });
  return Business;
};