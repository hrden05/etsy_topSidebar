import React from 'react';
import Colors from './Colors.jsx';
import Size from './Size.jsx';
import Quantity from './Quantity.jsx';

const Dropdown = (props) => (
  <div>
    <Size id={props.id} options={props.size}/>
    <Colors id={props.id} options={props.color} />
    <Quantity id={props.id} quantity={props.quantity}/>
  </div>
)

export default Dropdown;


// Should make individual functional stateless components for each: color, quantity, size.
// Then in Dropdown, if props category is clothing, render color, quantity, size
// if props category is art, return null
// if props category is jewelry, render engraving dropdown and add Personalization component
// if props category is misc, render color, personalization, quantity, size