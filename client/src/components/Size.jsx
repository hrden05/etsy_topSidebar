import React from 'react';

const Size = (props) => {

  if (props.options !== undefined && props.options.length > 0) {
    return (
      <div>
        <label>Size</label>
        <br></br>
        <select>
          <option>Select an option</option>
          {props.options.map(color => (
            <option key={color + props.id}>{color}</option>
            ))}
        </select>
      </div>
    )
  }
    return null;

}

export default Size;