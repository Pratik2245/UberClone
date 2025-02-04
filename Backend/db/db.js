const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    console.log("Attempting to connect to MongoDB...");
    await mongoose.connect(process.env.MongoUrl);
    console.log("Connected to MongoDB successfully ✅");
  } catch (error) {
    console.error("Database connection failed ❌:", error);
  }
};
module.exports = connectDb;
