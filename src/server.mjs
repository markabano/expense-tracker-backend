import dotenv from "dotenv";
import app from "./index.mjs";
import connectDB from "./config/db.config.mjs";

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
