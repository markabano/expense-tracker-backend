import {
  createExpenseService,
  getExpensesService,
  getExpenseService,
  updateExpenseService,
  deleteExpenseService,
} from "../services/expenseService.service.mjs";

// Create
export const createExpense = async (req, res) => {
  try {
    const expense = await createExpenseService(req.user._id, req.body);
    res.status(201).json(expense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all
export const getExpenses = async (req, res) => {
  try {
    const expenses = await getExpensesService(req.user._id);
    res.json(expenses);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get single
export const getExpense = async (req, res) => {
  try {
    const expense = await getExpenseService(req.user._id, req.params.id);
    res.json(expense);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Update
export const updateExpense = async (req, res) => {
  try {
    const expense = await updateExpenseService(
      req.user._id,
      req.params.id,
      req.body,
    );
    res.json(expense);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Delete
export const deleteExpense = async (req, res) => {
  try {
    await deleteExpenseService(req.user._id, req.params.id);
    res.json({ message: "Expense deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
