'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'users',
      [
        {
         name: 'Weeb',
         username: 'weebMcgeeb',
         email: 'thelongshot@yahoo.com',
         passwordDigest: 'epassword1',
         createdAt: new Date(),
         updatedAt: new Date() 
        }
      ]
    )
    
   
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {})
  }
};
