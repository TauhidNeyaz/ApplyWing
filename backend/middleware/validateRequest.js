const validateRequest = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'validation_error', message: 'Email and password are required.' });
  }

  next();
};

module.exports = validateRequest;