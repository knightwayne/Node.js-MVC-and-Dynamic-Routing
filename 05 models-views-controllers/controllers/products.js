const Product = require('../models/product2')

exports.getAddProduct = (req, res, next)=>{
    console.log('Add-Product Middleware!');
    res.render('add-product', {
        docTitle: 'Add Product Page', 
        path: '/admin/add-product', 
        formsCSS: true, 
        productCSS: true
        /*, layout: false*/
    })
};

//const products = [];

exports.postAddProduct = (req, res, next)=>{
    console.log("Product Added Middleware!", req.body);
    //products.push({title: req.body.title});
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProduct = (req, res, next)=>{
    Product.fetchAll(products=>{
        console.log("Shop Page Middleware!", products);
        res.render('shop', {
            prod: products, 
            docTitle: 'Shop Page', 
            path: '/', 
            hasProducts: products.length>0, 
            productCSS: true
            /*, layout: false*/
        });
    })
    // const products = Product.fetchAll();
    // console.log("Shop Page Middleware!", products);
    // res.render('shop', {
    //     prod: products, 
    //     docTitle: 'Shop Page', 
    //     path: '/', 
    //     hasProducts: products.length>0, 
    //     productCSS: true
    //     /*, layout: false*/
    // });
};
