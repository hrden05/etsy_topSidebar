import React from 'react';

const Stock = (props) => {

  let stock = '';
  if (props.stock) {
    stock = 'In stock';
  } else {
    stock = 'Out of stock';
  };

  return (
    <div className="priceStock">
      <span className="priceCheck">
        <svg className="priceCheckSpace">
          <path className="priceCheckMark" d="M9.057,20.471L2.293,13.707a1,1,0,0,1,1.414-1.414l5.236,5.236,11.3-13.18a1,1,0,1,1,1.518,1.3Z"></path>
        </svg>
      </span>
      <p>{stock}</p>
    </div>
  )
}

export default Stock;


