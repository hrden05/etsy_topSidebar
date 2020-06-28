import React from 'react';

const Stock = (props) => {
  let ranNum = Math.floor(Math.random() * Math.floor(3));

  if (props.stock !== undefined) {

    if (ranNum === 0) {
      return (
        <div className="priceStock">
          <span className="priceCheck">
            <svg className="priceCheckSpace">
              <path className="priceCheckMark" d="M9.057,20.471L2.293,13.707a1,1,0,0,1,1.414-1.414l5.236,5.236,11.3-13.18a1,1,0,1,1,1.518,1.3Z"></path>
            </svg>
          </span>
          <p className="priceStockText">
            <b className="priceInStock">{props.stock[ranNum]}</b>
          </p>
        </div>
      )
    } else {
      return (
        <div className="priceStock">

          <p className="onlyOneTextBox">
            <b className="onlyOneText">{props.stock[ranNum]}</b>
          </p>
        </div>
      )
    };
  }
  return null;
}

export default Stock;


