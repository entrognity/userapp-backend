const express = require('express');
const router = express.Router();
const homeControllers = require('../controllers/homeControllers');

// define routes and their corresponding controllers
router.get('/', homeControllers.getHome);

module.exports = router;