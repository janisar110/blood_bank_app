import mongoose from "mongoose";

const dbConnection = () => {
  try {
    mongoose.connect(process.env.DB_URI);
    mongoose.connection.on("connected", () => console.log("MongoDB Connected"));
    mongoose.connection.on("error", (err) => console.log("MongoDB Error", err));
  } catch (error) {
    console.log("Error in DB connection function", error.message);
  }
};

export default dbConnection;
