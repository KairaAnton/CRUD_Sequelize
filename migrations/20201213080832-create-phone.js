'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Phones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      model: {
        allowNull:false,
        type: Sequelize.STRING
      },
      brand: {
        allowNull:false,
        type: Sequelize.STRING
      },
      yearOfCreation: {
      allowNull:false,
      type:Sequelize.INTEGER
      },
      RAM: {
      allowNull:false,
       type: Sequelize.INTEGER
      },
      CPU: {
        allowNull:false,
        type: Sequelize.STRING
      },
      diagonal: {
        allowNull:false,
        type: Sequelize.REAL
      },
      NFC: {
        allowNull:false,
        type: Sequelize.BOOLEAN
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Phones');
  }
};