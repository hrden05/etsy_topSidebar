import React from 'react';

const Size = (props) => {

  if (props.options !== undefined && props.options.length > 0) {
    return (
      <div className="dropdownIndividuals">
        <label className="dropdownLabel">Size</label>
        <div className="dropdownContainers">
          <select className="dropdownSelectors">
            <option className="dropdownValues">Select an option</option>
            {props.options.map(color => (
              <option key={color + props.id} className="dropdownValues">{color}</option>
              ))}
          </select>
        </div>
      </div>
    )
  }
    return null;

}

export default Size;