import {
  registerUserService,
  loginUserService,
  getUserProfileService,
} from "../services/userService.service.mjs";

// Register
export const registerUser = async (req, res) => {
  try {
    const userData = await registerUserService(req.body);
    res.status(201).json(userData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Login
export const loginUser = async (req, res) => {
  try {
    const userData = await loginUserService(req.body);
    res.json(userData);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

// Profile
export const getUserProfile = async (req, res) => {
  try {
    const userData = await getUserProfileService(req.user._id);
    res.json(userData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
