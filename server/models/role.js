const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Role extends Model {
  static associate(models) {
    Role.hasMany(models.User, { foreignKey: 'roleId' });
  }
}

Role.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Role',
});

module.exports = Role;
