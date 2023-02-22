import mongoose from "mongoose";

export async function connectToDB() {
  try {
    mongoose.set("strictQuery", false);
    const dbConnect = await mongoose.connect(process.env.MONGODB_URI);
  } catch (err) {
    console.log(err);
  }
}
