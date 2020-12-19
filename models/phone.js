'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    
    static associate(models) {
     
    }
  };
  Phone.init({
    model: {
      allowNull:false,
      type:DataTypes.STRING},
    brand: {
      allowNull:false,
      type:DataTypes.STRING},
    yearOfCreation: {
      allowNull:false,
      type:DataTypes.INTEGER},
    RAM: {
      allowNull:false,
      type:DataTypes.INTEGER},
    CPU:{
      allowNull:false,
      type:DataTypes.STRING},
    diagonal: {
      allowNull:false,
      type:DataTypes.REAL},
    NFC: {
      allowNull:false,
      type:DataTypes.BOOLEAN}
  }, {
    sequelize,
    modelName: 'Phone',
  });
  return Phone;
};