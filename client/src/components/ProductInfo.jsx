import React from 'react';
import Bestseller from './Bestseller.jsx';
import Price from './Price.jsx';

const ProductInfo = (props) => {

  let stock = '';
  if (props.stock) {
    stock = 'In stock';
  } else {
    stock = 'Out of stock';
  };

  // let randomTenth = Math.random().toFixed(1);
  // let regularPrice = (props.price / randomTenth).toFixed(2);
  // let saved = (regularPrice - props.price).toFixed(2);
  // let percentSaved = (100 - (randomTenth * 100)).toFixed(2);

  return (
    <div className="productBox">
      <div className="productInBox">
        <h1 className="productName">{props.name}</h1>
        {/* <span className="bestseller">Bestseller</span> */}
        <Bestseller bestseller={props.bestseller} />
      </div>
    </div>
  )
}

export default ProductInfo;