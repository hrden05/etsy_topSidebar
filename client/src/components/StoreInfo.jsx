import React from 'react';

const StoreInfo = (props) => {

  console.log("StoreInfo", props.sales)
  let sales = 0;
  if (props.sales !== undefined) {
    sales = props.sales.toLocaleString();
  }

  return (
    <div>
      <p>{props.user}</p>
      <p>{sales} sales</p>
      <p>|</p>
      <p>{props.rating} stars</p>
    </div>
  )
}
export default StoreInfo;