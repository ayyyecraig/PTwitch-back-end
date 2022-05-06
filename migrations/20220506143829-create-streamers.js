'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('streamers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      contentType: {
        type: Sequelize.STRING
      },
      schedule: {
        type: Sequelize.STRING
      },
      img: {
        type: Sequelize.STRING
      },
      playlistId: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('streamers');
  }
};