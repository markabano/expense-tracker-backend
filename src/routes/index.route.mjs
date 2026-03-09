import express from "express";
import userRoutes from "../routes/userRoutes.route.mjs";
import transactionRoutes from "../routes/transactionRoutes.route.mjs";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/transactions", transactionRoutes);

export default router;
