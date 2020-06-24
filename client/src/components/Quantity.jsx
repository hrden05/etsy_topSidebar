import React from 'react';

const Quantity = (props) => {

  if (props.quantity !== undefined) {
    let numberArr = [];
    if (props !== undefined) {
      for (let i = 1; i <= props.quantity; i++) {
        numberArr.push(i);
      }
    }

    return (
      <div>
        <label>Quantity</label>
        <br></br>
        <select>
          {numberArr.map(num =>
            <option key={num + props.id}>{num}</option>
          )}
        </select>
      </div>
    )
  }
  return null;
}

export default Quantity;