//product not products because it represents the structure of a single product
//storing in array

const products = [];

module.exports = class Product{
    constructor(t){
        this.title = t;
    }

    save(){
        products.push(this);
    }

    static fetchAll(){  //static can be called without object of class
        return products;
    }
}