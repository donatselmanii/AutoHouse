'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PostContents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      description: {
        type: Sequelize.TEXT,
        defaultValue: null
      },
      condition: {
        type: Sequelize.STRING,
        defaultValue: 'used'
      },
      sold: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      number_of_views: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      seats: {
        type: Sequelize.INTEGER,
        defaultValue: 5
      },
      color: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      photo_360Blob: {
        type: Sequelize.BLOB
      },
      id_extras: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Extras',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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
    await queryInterface.dropTable('PostContents');
  }
};