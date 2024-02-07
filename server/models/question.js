const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Question extends Model {}

Question.init({
  question: DataTypes.STRING,
  description: DataTypes.STRING,
  photo: DataTypes.BLOB,
  userId: DataTypes.INTEGER
}, {
  sequelize,
  modelName: 'Question',
});

module.exports = Question;
