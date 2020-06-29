import React from 'react';
import Stock from './Stock.jsx';

const Price = (props) => {
  let randomTenth = Math.random().toFixed(1);
  let regularPrice = (props.price / randomTenth).toFixed(2);
  let saved = (regularPrice - props.price).toFixed(2);
  let percentSaved = (100 - (randomTenth * 100)).toFixed(2);

  let saleEnd = Math.floor(Math.random() * 24 + 1);
  // console.log("randomTenth:", randomTenth, "regularPrice:", regularPrice, "saved: ", saved, "percentSaved: ", percentSaved)
  if (props.price !== undefined) {
    let price = props.price.toFixed(2);

    if (randomTenth == 0 || percentSaved == 0) {
      return (
        <div className="priceBox">
          <div className="priceMain">
            <div className="priceLeft">
              <p className="priceLeftText">${price}+</p>
            </div>
            <Stock stock={props.stock}/>
          </div>
        </div>
      )
    } else if (props.saleEnd) {
      let price = props.price.toFixed(2);
      return (
        <div className="priceBox">
          <div className="priceMain">
            <div className="priceLeft">
              <p className="priceLeftText">${price}+</p>
              <p className="priceLeftRegular">${regularPrice}+</p>
            </div>
            <Stock stock={props.stock}/>
          </div>
          <p className="priceSavings">You save ${saved} ({percentSaved}%)</p>
          <span className="priceSaleEnd" id="check">Sale ends in {saleEnd} hours</span>
        </div>
      )
    } else {
      // let price = props.price.toFixed(2);
      return (
        <div className="priceBox">
          <div className="priceMain">
            <div className="priceLeft">
              <p className="priceLeftText">${props.price}+</p>
              <p className="priceLeftRegular">${regularPrice}+</p>
            </div>
            <Stock stock={props.stock}/>
          </div>
          <p className="priceSavings">You save ${saved} ({percentSaved}%)</p>
        </div>
      )
    }
  }
  return null;
}

export default Price;