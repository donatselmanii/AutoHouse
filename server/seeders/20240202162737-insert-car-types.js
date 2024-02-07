'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Types', [
      { nameType: 'Sedan', numberOfCars: 0 },
      { nameType: 'SUV', numberOfCars: 0 },
      { nameType: 'Convertible', numberOfCars: 0 },
      { nameType: 'Coupe', numberOfCars: 0 },
      { nameType: 'Hatchback', numberOfCars: 0 },
      { nameType: 'Minivan', numberOfCars: 0 },
      { nameType: 'Pickup Truck', numberOfCars: 0 },
      { nameType: 'Sports Car', numberOfCars: 0 },
      { nameType: 'Classic', numberOfCars: 0 },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Types', null, {});
  }
};
