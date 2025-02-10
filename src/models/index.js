import sequelize from "../db.js";
import Alternative from "./Alternative.js";
import Category from "./Category.js";
import Comparison from "./Comparison.js";

// Sync Database
const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected!");
    await sequelize.sync({ alter: true }); // Sync models with database
    console.log("✅ Tables synced successfully!");
  } catch (error) {
    console.error("❌ Database sync failed:", error);
  }
};

export { Alternative, Category, Comparison, syncDatabase };
