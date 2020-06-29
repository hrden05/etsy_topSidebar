import React from 'react';

const Bestseller = (props) => {
  if (!props.bestseller) {
    return null;
  } else {
    return <span className="bestseller">Bestseller</span>
  }
}
export default Bestseller;