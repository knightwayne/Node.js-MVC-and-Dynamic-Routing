const Product = require('../models/product')

exports.getAddProduct = (req, res, next)=>{
    console.log('Add-Product Middleware!');
    res.render('admin/edit-product', {
        docTitle: 'Add Product Page', 
        path: '/admin/add-product', 
        editing: false
        /*, layout: false*/
    })
};

exports.postAddProduct = (req, res, next)=>{
    console.log("Product Added Middleware!", req.body);
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, description, price);
    product.save();
    res.redirect('/');
};

exports.getEditProduct = (req, res, next)=>{
    const editMode = req.query.edit;
    if(!editMode){
        return res.redirect('/');
    }
    const prodID = req.params.productID;
    //console.log(prodID)
    Product.findById(prodID, productFound=>{
        res.render('admin/edit-product', {
            prod: productFound, 
            docTitle: 'Edit Product Page', 
            path: '/admin/edit-product',
            editing: editMode
        });
    }) 
};

exports.postEditProduct = (req, res, next)=>{
    /*const editMode = req.query.edit;
    if(!editMode){
        return res.redirect('/');
    }*/
    const prodID = req.params.productID;
    //console.log(prodID)
    Product.findById(prodID, productFound=>{
        res.render('admin/edit-product', {
            prod: productFound, 
            docTitle: 'Edit Product Page', 
            path: '/admin/edit-product',
            editing: editMode
        });
    }) 
};

exports.getProducts = (req, res, next)=>{
    Product.fetchAll(products=>{
        //console.log("Shop Page Middleware!", products);
        res.render('admin/products', {
            prod: products, 
            docTitle: 'Admin Products', 
            path: 'admin/products',
            hasProducts: products.length > 0
        });
    })
};