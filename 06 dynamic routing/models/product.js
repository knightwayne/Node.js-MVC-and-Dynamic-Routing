//product not products because it represents the structure of a single product
//storing in file

const fs = require('fs');
const path = require('path');
const p = path.join(__dirname, '..', 'data', 'products.json');

module.exports = class Product{
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
      }

    save(){
        this.id = Math.random().toString();
        fs.readFile(p, (err, fileData)=>{
            let products = [];
            if(!err){
                products = JSON.parse(fileData);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products),(err)=>{
            
                console.log(err);
            });
        })
    }

    //cb will be called when all products are fetched
    //cant use return here                      //asynch code
    static fetchAll(cb){                        //doesnt return anything, hence undefined (see below)
        fs.readFile(p, (err, fileData)=>{       //just registers this function, does not executes it, hence nothing is returned
            if(err){
                console.log(err);
                //return [];                    //return of inner function
                return cb([]);
            }
            //return JSON.parse(fileData);      //return of inner function
            let products = JSON.parse(fileData);
            return cb(products);
        })
    }

    static findById(id, cb){                    //cb executed when function finishes loading
        fs.readFile(p, (err, fileData)=>{
            let products = JSON.parse(fileData);
            let productFound;
            for (let p of products)
            {
                if(p.id===id)
                {
                    productFound = p;
                    break;
                }
            }
            cb(productFound);
        })
    }
}