import mongoose, { connect } from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected');
  }

  const url = process.env.MONGODB_URI;
  try {
    await mongoose.connect(url);
    isConnected = true;
    console.log('DB connected');
  } catch (error) {
    console.log(error);
  }
};
