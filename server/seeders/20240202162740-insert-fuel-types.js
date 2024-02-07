'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Fuel', [
      { name: 'Gasoline' },
      { name: 'Diesel' },
      { name: 'Electric' },
      { name: 'Hybrid', },
      { name: 'Propane', },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Fuel', null, {});
  }
};
