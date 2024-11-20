const express = require('express');
const router = express.Router();
const ordersControllers = require('../controllers/ordersControllers');


router.post('/addToCart', ordersControllers.addToCart);
router.post('/submitOrder', ordersControllers.submitOrder);
router.get('/priceTest', ordersControllers.priceTest);
router.post('/dev/addDeliveryTypes', ordersControllers.addDeliveryTypes);
router.post('/dev/addOrderDeliveryDetails', ordersControllers.addOrderDeliveryDetails);

module.exports = router;