'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    
    static associate(models) {
     Phone.belongsToMany(models.CPU, {through: 'PhoneCPU'})
    }
  };
  Phone.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    model: {
      allowNull:false,
      type:DataTypes.STRING,
       validate: {
        notNull: true,
      }},
    brand: {
      allowNull:false,
      type:DataTypes.STRING,
       validate: {
        notNull: true,
      }},
    yearOfCreation: {
      allowNull:false,
      type:DataTypes.INTEGER,
      validate: {
        notNull: true,
      }},
    RAM: {
      allowNull:false,
      type:DataTypes.INTEGER, validate: {
        notNull: true,
      }},
    CPU:{
      allowNull:false,
      type:DataTypes.STRING, validate: {
        notNull: true,
      }},
    diagonal: {
      allowNull:false,
      type:DataTypes.REAL, validate: {
        notNull: true,
      }},
    NFC: {
      allowNull:false,
      type:DataTypes.BOOLEAN, validate: {
        notNull: true,
      }}
  }, {
    sequelize,
    modelName: 'Phone',
  });
  return Phone;
};