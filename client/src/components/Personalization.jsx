import React from 'react';

const Personalization = (props) => {
  if (props.option) {
    return (
      <div>
        <p>Add your personalization (optional)</p>
        <textarea></textarea>
        <div>256</div>
      </div>
    )
  } else {
    return null;
  }
}

export default Personalization;