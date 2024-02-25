'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Businesses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      logo_photo: {
        allowNull: false,
        type: Sequelize.BLOB
      },
      cover_photo: {
        type: Sequelize.BLOB
      },
      location: {
        allowNull: false,
        type: Sequelize.STRING
      },
      contact_number: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      reviews: {
        type: Sequelize.DECIMAL,
        defaultValue: null
      },
      number_of_views: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      social_media_links: {
        type: Sequelize.JSON
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      id_businesstype: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'BusinessTypes',
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
    await queryInterface.dropTable('Businesses');
  }
};