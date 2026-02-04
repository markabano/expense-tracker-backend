import express from "express";
import userRoutes from "../routes/userRoutes.route.mjs";
import expenseRoutes from "../routes/expenseRoutes.route.mjs";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/expenses", expenseRoutes);

export default router;
