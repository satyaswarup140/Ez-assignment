const User = require('../models/User');
const bcrypt = require('bcryptjs'); // If you're hashing passwords

// signUp function
exports.signUp = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Hash the password (using bcrypt)
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: 'User created successfully',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error during sign-up',
      error: error.message,
    });
  }
};
