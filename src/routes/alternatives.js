import express from "express";

const router = express.Router();

// GET all software alternatives (Placeholder Response)
router.get("/", (req, res) => {
  res.json({ message: "Alternatives endpoint is working!" });
});

export default router;
