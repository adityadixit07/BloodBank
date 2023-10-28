const mongoose = require("mongoose");

const db = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected connection host: ${conn.connection.host}`);
  } catch (err) {
    console.log("error on connecting to the database");
  }
};

module.exports = db;
