import express from "express";
import { Op, Sequelize } from "sequelize";
import Alternative from "../models/Alternative.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { features } = req.query;
    if (!features) {
      return res.status(400).json({ error: "Missing 'features' query parameter" });
    }

    const featuresArray = features.split(",");

    const results = await Alternative.findAll({
      where: {
        features: {
          [Op.overlap]: Sequelize.literal(`ARRAY[${featuresArray.map(f => `'${f}'`).join(",")}]::text[]`),
        },
      },
    });

    res.json(results);
  } catch (error) {
    console.error("Search Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
