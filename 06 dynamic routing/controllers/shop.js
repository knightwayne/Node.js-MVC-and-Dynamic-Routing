const Product = require('../models/product')
const Cart = require('../models/cart')

exports.getIndexPage = (req, res, next)=>{
    Product.fetchAll(products=>{
        console.log("Index Page");
        res.render('shop/index', {
            prod: products, 
            docTitle: 'Shop Page', 
            path: '/',
            hasProducts: products.length > 0
        });
    })
};

exports.getProductsPage = (req, res, next)=>{
    Product.fetchAll(products=>{
        console.log("All Products!", products);
        res.render('shop/product-list', {
            prod: products, 
            docTitle: 'All Products', 
            path: '/products',
            hasProducts: products.length > 0
        });
    })
};

exports.getProductDetail = (req, res, next)=>{
    const param = req.params.productID;                             //GET METHOD
    Product.findById(param, productFound=>{
        console.log("xoxo", productFound);
        res.render('shop/product-detail', {
            docTitle: 'Product Detail',
            path: '/products',
            prod: productFound
        });
    })
    
};

exports.getCartPage = (req, res, next)=>{
    Product.fetchAll(products=>{
        console.log("Cart");
        res.render('shop/cart', {
            prod: products, 
            docTitle: 'Cart Page', 
            path: '/cart'
        });
    })
};

exports.postCartPage = (req,res,next)=>{
    const prodID = req.body.productID;                              //POST METHOD
    Product.findById(prodID, productFound=>{
        console.log("Cart Posted!", prodID);
        Cart.addProduct(prodID, productFound.price);
        res.redirect('/cart');
    })
}

exports.getCheckoutPage = (req, res, next)=>{
    Product.fetchAll(products=>{
        console.log("Checkout Page");
        res.render('shop/checkout', {
            prod: products, 
            docTitle: 'Checkout Page', 
            path: '/checkout'
        });
    })
};

exports.getOrderPage = (req, res, next)=>{
    Product.fetchAll(products=>{
        console.log("Order Page");
        res.render('shop/order', {
            prod: products, 
            docTitle: 'Order Page', 
            path: '/order'
        });
    })
};

