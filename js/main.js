import { connectApi } from "./modules/connect.js";
import { saleProduct } from "./modules/saleProduct.js";
import { VATaxs } from "./modules/taxs.js";

import validator from 'validator';

(async()=>{

    let data = await connectApi('https://fakestoreapi.com/products')

    let pricesVat = data.map((product) => VATaxs(product.price))
    let priceAfterSale = data.map((product) => saleProduct(0.2,product.price))

    console.log(pricesVat);
    console.log(priceAfterSale);

    console.log(validator.isEmail('mail'));
    
    
    

})()