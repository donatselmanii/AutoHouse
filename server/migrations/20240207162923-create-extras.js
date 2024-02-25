'use strict';

/** 
 * @type {import('sequelize-cli').Migration} 
 */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Extras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ABS: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      panoramicRoof: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      bluetooth: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      tv: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      parkingSensors: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      electricWindows: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      airConditioning: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      immobilizer: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      heatedSeats: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      airbags: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      alarm: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      centralLocking: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      fogLights: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      electronicStabilityProgram: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      electricMirrors: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      matt: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      spoilers: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      cdPlayer: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      handsFreeKit: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      EDS: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      leatherInterior: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      trailerHitch: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      computer: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      metallicPaint: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      TCS: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      rainSensors: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      xenonLights: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      fourByFour: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      hydraulic: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      autopilot: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      navigation: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      multifunctionalSteeringWheel: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Extras');
  }
};
