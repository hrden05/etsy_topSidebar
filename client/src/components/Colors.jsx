import React from 'react';

const Colors = (props) => {

  if (props.options !== undefined && props.options.length > 0) {
    return (
      <div className="dropdownIndividuals">
        <label className="dropdownLabels">Colors</label>
        <div className="dropdownContainers">
          <select className="dropdownSelectors">
            <option className="dropdownValues">Select a color</option>
            {props.options.map(color => (
              <option key={color + props.id} className="dropdownValues">{color.charAt(0).toUpperCase() + color.slice(1)}</option>
              ))}
          </select>

        </div>
      </div>
    )
  }
  return null;
}

export default Colors;