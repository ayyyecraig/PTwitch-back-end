'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {})
  
  }
};
