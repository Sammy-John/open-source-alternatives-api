import express from "express";

const router = express.Router();

// GET all categories (Placeholder Response)
router.get("/", (req, res) => {
  res.json({ message: "Categories endpoint is working!" });
});

export default router;
