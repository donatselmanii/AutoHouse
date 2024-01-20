const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

class UserData extends Model {
  static associate(models) {
    UserData.belongsTo(models.User, { foreignKey: 'userId' });
  }
}

UserData.init({
  city: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  zipCode: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'UserData',
});

module.exports = UserData;
