import express from "express";

const router = express.Router();

// GET feature comparison between two apps (Placeholder Response)
router.get("/", (req, res) => {
  res.json({ message: "Compare endpoint is working!" });
});

export default router;
