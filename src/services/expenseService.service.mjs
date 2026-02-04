import Expense from "../models/Expense.model.mjs";

// Create expense
export const createExpenseService = async (userId, data) => {
  const expense = await Expense.create({ ...data, user: userId });
  return expense;
};

// Get all expenses for user
export const getExpensesService = async (userId) => {
  return Expense.find({ user: userId }).sort({ date: -1 });
};

// Get single expense (only if belongs to user)
export const getExpenseService = async (userId, expenseId) => {
  const expense = await Expense.findOne({ _id: expenseId, user: userId });
  if (!expense) throw new Error("Expense not found");
  return expense;
};

// Update expense
export const updateExpenseService = async (userId, expenseId, data) => {
  const expense = await Expense.findOneAndUpdate(
    { _id: expenseId, user: userId },
    data,
    { new: true },
  );
  if (!expense) throw new Error("Expense not found or unauthorized");
  return expense;
};

// Delete expense
export const deleteExpenseService = async (userId, expenseId) => {
  const expense = await Expense.findOneAndDelete({
    _id: expenseId,
    user: userId,
  });
  if (!expense) throw new Error("Expense not found or unauthorized");
  return expense;
};
