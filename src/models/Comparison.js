import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Comparison = sequelize.define("Comparison", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  software1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  software2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  feature: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  software1_support: {
    type: DataTypes.BOOLEAN,
  },
  software2_support: {
    type: DataTypes.BOOLEAN,
  },
});

export default Comparison;
