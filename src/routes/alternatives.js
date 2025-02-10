import express from "express";
import { Alternative, Category } from "../models/index.js";

const router = express.Router();

// GET alternatives by category
router.get("/", async (req, res) => {
  try {
    const { app } = req.query;
    
    if (!app) {
      return res.status(400).json({ error: "Missing 'app' query parameter" });
    }

    // Simulated app-category mapping
    const categoryMapping = {
      "Photoshop": "Design Tools",
      "Microsoft Office": "Productivity",
      "Google Drive": "Cloud Services"
    };

    const categoryName = categoryMapping[app];

    if (!categoryName) {
      return res.status(404).json({ error: "No known alternatives for this app" });
    }

    // Find category ID
    const category = await Category.findOne({ where: { name: categoryName } });

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    // Get alternatives for the category
    const alternatives = await Alternative.findAll({
      where: { categoryId: category.id }
    });

    res.json({ original_app: app, alternatives });
  } catch (error) {
    console.error("Error fetching alternatives:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
