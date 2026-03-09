import Transaction from "../models/Transaction.model.mjs";

// Create transaction
export const createTransactionService = async (userId, data) => {
  const transaction = await Transaction.create({ ...data, user: userId });
  return transaction;
};

// Get all transaction for user
export const getTransactionsService = async (userId) => {
  return Transaction.find({
    user: userId,
  }).sort({ date: -1 });
};

// Get single transaction (only if belongs to user)
export const getTransactionService = async (userId, transactionId) => {
  const transaction = await Transaction.findOne({
    _id: transactionId,
    user: userId,
  });
  if (!transaction) throw new Error("Transaction not found");
  return transaction;
};

// Update transaction
export const updateTransactionService = async (userId, transactionId, data) => {
  const transaction = await Transaction.findOneAndUpdate(
    { _id: transactionId, user: userId },
    data,
    { new: true },
  );
  if (!transaction) throw new Error("Expense not found or unauthorized");
  return transaction;
};

// Delete transaction
export const deleteTransactionService = async (userId, transactionId) => {
  const transaction = await Transaction.findOneAndDelete({
    _id: transactionId,
    user: userId,
  });
  if (!transaction) throw new Error("Transaction not found or unauthorized");
  return transaction;
};
