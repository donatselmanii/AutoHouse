'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Extras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Extras.init({
    ABS: DataTypes.BOOLEAN,
    panoramicRoof: DataTypes.BOOLEAN,
    bluetooth: DataTypes.BOOLEAN,
    tv: DataTypes.BOOLEAN,
    parkingSensors: DataTypes.BOOLEAN,
    electricWindows: DataTypes.BOOLEAN,
    airConditioning: DataTypes.BOOLEAN,
    immobilizer: DataTypes.BOOLEAN,
    heatedSeats: DataTypes.BOOLEAN,
    airbags: DataTypes.BOOLEAN,
    alarm: DataTypes.BOOLEAN,
    centralLocking: DataTypes.BOOLEAN,
    fogLights: DataTypes.BOOLEAN,
    electronicStabilityProgram: DataTypes.BOOLEAN,
    electricMirrors: DataTypes.BOOLEAN,
    matt: DataTypes.BOOLEAN,
    spoilers: DataTypes.BOOLEAN,
    cdPlayer: DataTypes.BOOLEAN,
    handsFreeKit: DataTypes.BOOLEAN,
    EDS: DataTypes.BOOLEAN,
    leatherInterior: DataTypes.BOOLEAN,
    trailerHitch: DataTypes.BOOLEAN,
    computer: DataTypes.BOOLEAN,
    metallicPaint: DataTypes.BOOLEAN,
    TCS: DataTypes.BOOLEAN,
    rainSensors: DataTypes.BOOLEAN,
    xenonLights: DataTypes.BOOLEAN,
    fourByFour: DataTypes.BOOLEAN,
    hydraulic: DataTypes.BOOLEAN,
    autopilot: DataTypes.BOOLEAN,
    navigation: DataTypes.BOOLEAN,
    multifunctionalSteeringWheel: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Extras',
  });
  return Extras;
};