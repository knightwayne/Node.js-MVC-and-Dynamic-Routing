const express = require('express');

const productControler = require('../controllers/products');

//express router
const router = express.Router();

//  /admin/add-product=>GET
router.get('/add-product' , productControler.getAddProduct);

//  /admin/add-product=>POST
router.post('/add-product' , productControler.postAddProduct);

module.exports = {
    router : router
}