import User from "../models/Users.model.mjs";
import { generateToken } from "../utils/generateToken.mjs";

// Register
export const registerUserService = async ({ name, email, password }) => {
  if (!name || !email || !password) {
    throw new Error("Name, email, and password are required");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new Error("User already exists");
  }

  const user = await User.create({ name, email, password });

  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id),
  };
};

// Login
export const loginUserService = async ({ email, password }) => {
  if (!email || !password) throw new Error("Email and password are required");

  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    throw new Error("Invalid email or password");
  }

  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id),
  };
};

// Profile
export const getUserProfileService = async (userId) => {
  const user = await User.findById(userId).select("-password");
  if (!user) throw new Error("User not found");
  return user;
};
