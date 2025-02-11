import express from "express";
import Alternative from "../models/Alternative.js";
import { Op } from "sequelize";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // Get sorting criteria and limit
    const { sort = "github_stars", limit = 5 } = req.query;

    // Fetch top alternatives sorted by specified field
    const alternatives = await Alternative.findAll({
      order: [[sort, "DESC"]],
      limit: parseInt(limit, 10),
    });

    res.json(alternatives);
  } catch (error) {
    console.error("Error fetching top alternatives:", error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
