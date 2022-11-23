'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('users', {
      id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: { 
        type: Sequelize.STRING,
        allowNull: false,
      },
      accountId : { 
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'accounts',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    });
  },

  async down (queryInterface, _Sequelize) {
    queryInterface.dropTable('users');
  }
};