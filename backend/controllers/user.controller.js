const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

const users = []; // In-memory user store

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const signup = (req, res) => {
  const { name, email, password } = req.body;

  if (users.find((user) => user.email === email)) {
    return res.status(400).json({ error: 'email_already_exists' });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
    password, // TODO: Hash password in production
  };

  users.push(newUser);

  const token = jwt.sign({ id: newUser.id, email: newUser.email }, 'secret', { expiresIn: '1h' });

  return res.status(201).json({
    token,
    user: { id: newUser.id, name: newUser.name, email: newUser.email },
  });
};

const login = (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ error: 'invalid_credentials' });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, 'secret', { expiresIn: '1h' });

  return res.status(200).json({
    token,
    user: { id: user.id, name: user.name, email: user.email },
  });
};

module.exports = {
  createUser,
  getUsers,
  signup,
  login
};