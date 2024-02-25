'use strict';
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Makes extends Model {}

Makes.init(
  {
    name: DataTypes.STRING,
    photo: DataTypes.BLOB
  },
  {
    sequelize,
    modelName: 'Makes',
    timestamps: true
  }
);

module.exports = Makes;
