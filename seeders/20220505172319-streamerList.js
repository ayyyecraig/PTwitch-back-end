'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'streamerLists'
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('streamerLists', null, {})
  }
};
