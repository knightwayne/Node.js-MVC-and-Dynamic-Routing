const express = require('express');

const productControler = require('../controllers/products');

//express router
const router = express.Router();

// /{nothing}=>GET
router.get('/' , productControler.getProduct);

module.exports = {
    router : router
}