'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('acc', {
      id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      balance: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, _Sequelize) {
    queryInterface.dropTable('accounts');
  }
};