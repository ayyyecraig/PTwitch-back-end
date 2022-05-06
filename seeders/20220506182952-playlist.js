'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'playlists',
      [{
        userId: 0,
        createdAt: new Date(),
        updatedAt: new Date()

      }]
    ) 
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('playlists', null, {})
  }
};
