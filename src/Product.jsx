import React, {Component} from 'react';
import ProductMedia from './productMedia';
import ProductDescription from './ProductDescription';
import classes from './Css/Product.module.css'

class Product extends Component{
    render(){
        return(
            <div className={classes.Product}>
                <ProductMedia/>
                <ProductDescription/>
            </div>
            
        );
    }
}

export default Product;