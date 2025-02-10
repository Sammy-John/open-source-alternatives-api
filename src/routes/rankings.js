import express from "express";

const router = express.Router();

// GET top-ranked alternatives (Placeholder Response)
router.get("/", (req, res) => {
  res.json({ message: "Rankings endpoint is working!" });
});

export default router;
