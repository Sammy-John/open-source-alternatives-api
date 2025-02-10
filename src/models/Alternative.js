import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import Category from "./Category.js";

const Alternative = sequelize.define("Alternative", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  website: {
    type: DataTypes.STRING,
  },
  github: {
    type: DataTypes.STRING,
  },
  platforms: {
    type: DataTypes.ARRAY(DataTypes.STRING), // ["Windows", "Mac", "Linux"]
  },
  features: {
    type: DataTypes.ARRAY(DataTypes.STRING), // ["Self-Hosted", "Cloud Storage"]
  },
  github_stars: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  last_updated: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: "id",
    },
  },
});

// Define relationships
Category.hasMany(Alternative, { foreignKey: "categoryId" });
Alternative.belongsTo(Category, { foreignKey: "categoryId" });

export default Alternative;
