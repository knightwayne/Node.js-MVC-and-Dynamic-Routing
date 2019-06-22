const express = require('express');

const adminController = require('../controllers/admin');

//express router
const router = express.Router();

router.get('/add-product' , adminController.getAddProduct);

router.get('/products', adminController.getProducts);

router.post('/add-product' , adminController.postAddProduct);

router.get('/edit-product/:productID' , adminController.getEditProduct);

router.post('/edit-product' , adminController.postEditProduct);

module.exports = {
    router : router
}