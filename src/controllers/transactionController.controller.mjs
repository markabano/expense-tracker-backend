import {
  createTransactionService,
  getTransactionsService,
  getTransactionService,
  updateTransactionService,
  deleteTransactionService,
} from "../services/transactionService.service.mjs";

// Create
export const createTransaction = async (req, res) => {
  try {
    const transaction = await createTransactionService(req.user._id, req.body);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all
export const getTransactions = async (req, res) => {
  try {
    const transactions = await getTransactionsService(req.user._id);
    res.json(transaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get single
export const getTransaction = async (req, res) => {
  try {
    const transaction = await getTransactionService(
      req.user._id,
      req.params.id,
    );
    res.json(transaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update
export const updateTransaction = async (req, res) => {
  try {
    const transaction = await updateTransactionService(
      req.user._id,
      req.params.id,
      req.body,
    );
    res.json(transaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete
export const deleteTransaction = async (req, res) => {
  try {
    const transaction = await deleteTransactionService(
      req.user._id,
      req.params.id,
    );
    res.json({ message: "Transaction deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
