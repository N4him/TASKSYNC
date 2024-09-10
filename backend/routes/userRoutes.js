const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateUser = require('../middleware/authMiddleware'); 

router.post('/register', userController.createUser);
router.post('/login', userController.getUsers);

module.exports = router;
