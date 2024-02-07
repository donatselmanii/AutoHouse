'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Type extends Model {}

Type.init({
  nameType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numberOfCars: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
}, {
  sequelize,
  modelName: 'Type',
});

module.exports = Type;
