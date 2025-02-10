'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comparison extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comparison.init({
    software1: DataTypes.STRING,
    software2: DataTypes.STRING,
    feature: DataTypes.STRING,
    software1_support: DataTypes.BOOLEAN,
    software2_support: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Comparison',
  });
  return Comparison;
};