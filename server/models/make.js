const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Make extends Model {
}

Make.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photo: {
    type: DataTypes.BLOB('long'),
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Make',
});

module.exports = Make;
