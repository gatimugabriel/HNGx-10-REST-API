import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(
      `Error occurred when connecting to Database: ${error.message}`
    );
    process.exit(1);
  }
};

export default connectDB;
