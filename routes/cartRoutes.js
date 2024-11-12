const express = require('express');
const router = express.Router();
const cartControllers = require('../controllers/cartControllers');

// define routes and their corresponding controllers
router.post('/addToCart', cartControllers.addToCart);
router.get('/getCartItems', cartControllers.getCartItems);
router.put('/updateCartItem', cartControllers.updateCartItem);
router.delete('/deleteCartItem', cartControllers.deleteCartItem);

module.exports = router;