import React from 'react';

const Bestseller = (props) => {
  if (!props.bestseller) {
    return null;
  } else {
    return <div>Bestseller</div>
  }
}

export default Bestseller;