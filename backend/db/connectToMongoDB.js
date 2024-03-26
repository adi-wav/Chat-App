import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to mongoDB");
  } catch (error) {
    console.log("error in connecting to mongodb", error.message);
  }
};

export default connectToMongoDB;
