const express = require('express');
const { login } = require('../controllers/userController');
const { createUser, updateUserDetails } = require('../controllers/userController');

const router = express.Router();

router.post('/signup', createUser);
router.put('/update/:userId', updateUserDetails);
router.post('/login', login);

module.exports = router;
