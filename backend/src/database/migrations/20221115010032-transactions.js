'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('transactions', {
      id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      debitedAccountId : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'accounts',
          key: 'id'
        },
      },
      creditedAccountId : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'accounts',
          key: 'id'
        },
      },
      value: {
      type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
      }
    });
  },

  async down (queryInterface, _Sequelize) {
    queryInterface.dropTable('transactions');
  }
};