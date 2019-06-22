const express = require('express');

const shopController = require('../controllers/shop');

//express router
const router = express.Router();

router.get('/' , shopController.getIndexPage);

router.get('/products', shopController.getProductsPage);

router.get('/products/:productID', shopController.getProductDetail);

router.get('/cart', shopController.getCartPage);

router.post('/cart', shopController.postCartPage);

router.get('/order', shopController.getOrderPage);

router.get('/checkout', shopController.getCheckoutPage);

module.exports = {
    router : router
}