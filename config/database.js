import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery");

  if (connected) {
    console.log("MongoDB is already connected...");
  }

  // connect to DB
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("MongoDB connected...");
  } catch (error) {
    console.log(error);
    connected = false;
  }
};

export default connectDB;
