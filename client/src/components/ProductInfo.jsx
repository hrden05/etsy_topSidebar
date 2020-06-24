import React from 'react';

function round(num) {
  return Math.ceil(num *100) / 100;
};

const ProductInfo = (props) => {
  let stock = '';
  if (props.stock) {
    stock = 'In stock';
  } else {
    stock = 'Out of stock';
  };


  const regularPrice = round(props.price / .4).toFixed(2);
  const saved = round(regularPrice - props.price).toFixed(2);

  return (
    <div>
      <h3>{props.name}</h3>
      <p>${props.price}+</p>
      <p>${regularPrice}+</p>
      <p>You save ${saved} (60%)</p>
      <p>{stock}</p>
    </div>
  )
}

export default ProductInfo;