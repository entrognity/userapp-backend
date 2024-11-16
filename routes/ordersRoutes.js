const express = require('express');
const router = express.Router();
const ordersControllers = require('../controllers/ordersControllers');


router.post('/addToCart', ordersControllers.addToCart);
router.post('/submitOrder', ordersControllers.submitOrder);
router.get('/priceTest', ordersControllers.priceTest);

module.exports = router;