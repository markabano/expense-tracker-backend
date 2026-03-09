import express from "express";
import {
  createTransaction,
  getTransactions,
  getTransaction,
  updateTransaction,
  deleteTransaction,
} from "../controllers/transactionController.controller.mjs";
import { protect } from "../middlewares/authMiddleware.middleware.mjs";

const router = express.Router();

// Protect all transaction routes
router.use(protect);

router.post("/create", createTransaction);
router.get("/getAll", getTransactions);
router.get("/get:id", getTransaction);
router.put("/update:id", updateTransaction);
router.delete("/delete:id", deleteTransaction);

export default router;
