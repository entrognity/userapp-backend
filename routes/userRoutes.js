const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');

// define routes and their corresponding controllers
router.get('/', userControllers.getUser);
router.get('/getAddress', userControllers.getAddress);

module.exports = router;