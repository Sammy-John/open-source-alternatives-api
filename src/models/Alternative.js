import { DataTypes, Sequelize } from "sequelize"; // ✅ Import Sequelize
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
    type: DataTypes.ARRAY(DataTypes.STRING), // ✅ Correct usage
  },
  features: {
    type: DataTypes.ARRAY(DataTypes.STRING), // ✅ Fixed `Sequelize.ARRAY`
    allowNull: false,
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
    type: DataTypes.UUID, // ✅ Use UUID instead of INTEGER if Categories use UUID
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
