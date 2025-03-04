'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alternative extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Alternative.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    website: DataTypes.STRING,
    github: DataTypes.STRING,
    platforms: DataTypes.ARRAY,
    features: DataTypes.ARRAY,
    github_stars: DataTypes.INTEGER,
    last_updated: DataTypes.DATE,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Alternative',
  });
  return Alternative;
};