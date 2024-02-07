'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        firstname: 'admin',
        lastname: 'admin',
        username: 'admin',
        password: '$argon2id$v=19$m=65536,t=3,p=4$yOr9pPeSTkVZEFVRy9O94A$4rYuF2EoC3RfWi5BuOxDekunG5kM7Ui7cz2ZyRlExtk',
        email: 'admin@example.com',
        phone: '123-456-7890',
        failedLoginAttempts: 0,
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: 'user',
        lastname: 'user',
        username: 'user',
        password: '$argon2id$v=19$m=65536,t=3,p=4$TWMQPHbQAySAXiijTtfFhQ$DedKMqqaA6gH/G0sx4FJeFoUwmxZt46C5a6zP92znWI',
        email: 'user@example.com',
        phone: '987-654-3210',
        failedLoginAttempts: 0,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstname: 'manager',
        lastname: 'manager',
        username: 'manager',
        password: '$argon2id$v=19$m=65536,t=3,p=4$jkGLHbhma3Gd3eQffpqwVA$GadAcCyiy9iZBUTrqvgiF1Lu18UgvZgkK8xwGKdCjGE',
        email: 'manager@example.com',
        phone: '555-123-4567',
        failedLoginAttempts: 0,
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
