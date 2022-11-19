import express from 'express';
import dotenv from 'dotenv';

// Routes
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import hotelsRoute from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to MongoDB!');
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('mongoDB disconnected!');
});

// middlewares

app.use(express.json());

app.use('/auth', authRoute);
app.use('/users', usersRoute);
app.use('/hotels', hotelsRoute);
app.use('/rooms', roomsRoute);

app.listen(3000, () => {
  connect();
  console.log('Connected to backend!');
});
