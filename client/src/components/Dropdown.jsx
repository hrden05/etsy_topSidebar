import React from 'react';


const Dropdown = (props) => {

  return (
    <div>
      <p></p>
      <select></select>
    </div>
  )
}

export default Dropdown;


// Should make individual functional stateless components for each: color, quantity, size.
// Then in Dropdown, if props category is clothing, render color, quantity, size
// if props category is art, return null
// if props category is jewelry, render engraving dropdown and add Personalization component
// if props category is misc, render color, personalization, quantity, size