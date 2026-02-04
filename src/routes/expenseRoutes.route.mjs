import express from "express";
import {
  createExpense,
  getExpenses,
  getExpense,
  updateExpense,
  deleteExpense,
} from "../controllers/expenseController.controller.mjs";
import { protect } from "../middlewares/authMiddleware.middleware.mjs";

const router = express.Router();

// Protect all expense routes
router.use(protect);

router.post("/create", createExpense);
router.get("/getAll", getExpenses);
router.get("/get:id", getExpense);
router.put("/update:id", updateExpense);
router.delete("/delete:id", deleteExpense);

export default router;
