'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'comments',
      [
        {
          userId: 0,
          playlistId: 0,
          content: "poggers",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('comments', null, {})
  }
};
