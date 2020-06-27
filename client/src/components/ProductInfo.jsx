import React from 'react';
import Bestseller from './Bestseller.jsx';

const ProductInfo = (props) => {

  let stock = '';
  if (props.stock) {
    stock = 'In stock';
  } else {
    stock = 'Out of stock';
  };

  let randomTenth = Math.random().toFixed(1);
  let regularPrice = (props.price / randomTenth).toFixed(2);
  let saved = (regularPrice - props.price).toFixed(2);
  let percentSaved = (100 - (randomTenth * 100)).toFixed(2);

  if (props.category === 'art') {
    return (
      <div class="productBox">
        <div class="productInBox">
          <div class="productName">{props.name}</div>
          <Bestseller bestseller={props.bestseller} />
          <div>${props.price}+</div>
          {/* <p>${regularPrice}+</p>
          <p>You save ${saved} ({percentSaved}%)</p> */}
          <p>{stock}</p>
        </div>
      </div>
    )
  } else {
    return (
      <div class="productBox">
        <div class="productInBox">
          <div class="productName">{props.name}</div>
          <Bestseller bestseller={props.bestseller} />
          <div>${props.price}+</div>
          <p>${regularPrice}+</p>
          <p>You save ${saved} ({percentSaved}%)</p>
          <p>{stock}</p>
        </div>
      </div>
    )
  }
}

export default ProductInfo;