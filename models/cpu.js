'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CPU extends Model {
    
    static associate(models) {
     CPU.belongsToMany(models.Phone, {through: 'PhoneCPU'})
    }
  };
  CPU.init({
    name:{
        allowNull:false,
        type:DataTypes.STRING,
        validate={
          notNull:true,
          notEmpty
        }
    },
    core: {
      allowNull:false,
      type:DataTypes.INTEGER,
    validate={
      notNull:true
    }},
    clockSpeed: {
      allowNull:false,
      type:DataTypes.STRING,
      validate={
        notNull:true
      }},
    processorCache: {
      allowNull:false,
      type:DataTypes.INTEGER,
      validate={
        notNull:true
      }}
  }, {
    sequelize,
    modelName: 'CPU',
  });
  return CPU;
};