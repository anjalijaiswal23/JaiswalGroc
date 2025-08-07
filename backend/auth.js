const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Dummy user store (replace with DB in production)
const users = [];

// Signup API
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  const userExists = users.find(u => u.email === email);
  if (userExists) {
    return res.status(409).json({ message: 'User already exists' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ name, email, password: hashedPassword });
  res.status(201).json({ message: 'User registered successfully' });
});

// Login API
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  // Generate JWT token
  const token = jwt.sign({ email: user.email, name: user.name }, 'secretkey', { expiresIn: '1h' });
  res.json({ token, user: { name: user.name, email: user.email } });
});

module.exports = router;
