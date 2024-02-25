'use strict';
const {
  Model
} = require('sequelize');
const sequelize = require('../config/database');
module.exports = (sequelize, DataTypes) => {
  class Models extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Models.init({
    name: DataTypes.STRING,
    id_make: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Models',
  });
  return Models;
};