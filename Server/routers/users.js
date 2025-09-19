// Defines endpoints
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/', usersController.getAllUsers);

// router.post('/', usersController.createUser);   ← Add more routes as needed

module.exports = router;
