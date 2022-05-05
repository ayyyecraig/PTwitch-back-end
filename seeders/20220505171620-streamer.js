'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'streamers'
      // [
      //   {}
      // ]
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('streamers', null, {})
  }
};
