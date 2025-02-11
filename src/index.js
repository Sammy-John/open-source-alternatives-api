import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";

import categoryRoutes from "./routes/categories.js";
import alternativeRoutes from "./routes/alternatives.js";
import compareRoutes from "./routes/compare.js";
import searchRoutes from "./routes/search.js";
import topAlternativesRoutes from "./routes/topAlternatives.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

// Register API routes
app.use("/categories", categoryRoutes);
app.use("/alternatives", alternativeRoutes);
app.use("/compare", compareRoutes);
app.use("/search", searchRoutes);
app.use("/top-alternatives", topAlternativesRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
