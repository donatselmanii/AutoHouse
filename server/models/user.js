const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Role = require('./role');

class User extends Model {
  static associate(models) {
    User.belongsTo(models.Role, { foreignKey: 'roleId' });
  }
}

User.init({
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING(20),
  },
  failedLoginAttempts: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  roleId: {
    type: DataTypes.INTEGER,
  },
}, {
  sequelize,
  modelName: 'User',
});

module.exports = User;
