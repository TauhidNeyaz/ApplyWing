const express = require('express');
const { signup, login } = require('../controllers/user.controller');
const validateRequest = require('../middleware/validateRequest');

const router = express.Router();

router.post('/signup', validateRequest, signup);
router.post('/login', validateRequest, login);

module.exports = router;