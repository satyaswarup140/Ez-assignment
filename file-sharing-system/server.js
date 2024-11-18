const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Example routes
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// MongoDB connection setup
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1); // Exit the process if the connection fails
  }
};

// Start the server and connect to MongoDB
const startServer = async () => {
  try {
    await connectDB();
    app.listen(5001, () => {
      console.log('Server is running on port 5001');
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
};

// Run the server
startServer();

