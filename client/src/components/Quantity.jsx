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
      <div className="dropdownIndividuals">
        <label className="dropdownLabels">Quantity</label>
        <div className="dropdownContainers">
          <select className="dropdownSelectors">
            {numberArr.map(num =>
              <option className="dropdownValues" key={num + props.id}>{num}</option>
              )}
          </select>

        </div>
      </div>
    )
  }
  return null;
}

export default Quantity;