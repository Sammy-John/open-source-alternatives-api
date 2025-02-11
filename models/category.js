'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Each category has many alternatives
      Category.hasMany(models.Alternative, {
        foreignKey: "categoryId",
        as: "alternatives",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }

  Category.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "Category",
      timestamps: true, // Ensure timestamps are enabled
    }
  );

  return Category;
};
