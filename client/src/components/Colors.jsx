import React from 'react';

const Colors = (props) => {

  if (props.options !== undefined && props.options.length > 0) {
    return (
      <div>
        <label>Colors</label>
        <br></br>
        <select>
          <option>Select a color</option>
          {props.options.map(color => (
            <option key={color + props.id}>{color}</option>
            ))}
        </select>
      </div>
    )
  }
  return null;
}

export default Colors;