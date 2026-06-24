import mongoose from "../db/mongoose.js";

export async function connectDB() {
  if (process.env.DB_DRIVER === "memory") {
    console.log("Using in-memory database driver (preview mode)");
    return;
  }
  const uri = process.env.MONGO_URI || "mongodb://localhost:27017/trading5";
  await mongoose.connect(uri);
  console.log("MongoDB connected");
}
