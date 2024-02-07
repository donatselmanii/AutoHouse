'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Fuel extends Model {}


  Fuel.init(
    {
      name: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Fuel',
      timestamps: true
    }
  );

  module.exports = Fuel;
