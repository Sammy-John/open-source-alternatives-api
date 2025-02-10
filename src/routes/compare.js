import express from "express";
import { Comparison } from "../models/index.js";

const router = express.Router();

// GET feature comparison between two apps
router.get("/", async (req, res) => {
  try {
    const { app1, app2 } = req.query;

    if (!app1 || !app2) {
      return res.status(400).json({ error: "Missing 'app1' and 'app2' query parameters" });
    }

    // Fetch comparison data
    const comparisons = await Comparison.findAll({
      where: { software1: app1, software2: app2 }
    });

    if (comparisons.length === 0) {
      return res.status(404).json({ error: "No comparison data found" });
    }

    res.json({ comparison: comparisons });
  } catch (error) {
    console.error("Error fetching comparison:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
