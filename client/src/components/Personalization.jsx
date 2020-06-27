import React from 'react';

const Personalization = (props) => {
  if (props.option) {
    return (
      <div className="personalizationBox">
        <button className="personalizationButton">
          <span className="personalizationField">
            Add your personalization (optional)
          </span>
        </button>
        <div className="personalizationDescription">
          <p className="personalizationWords"></p>
          <textarea className="textarea"></textarea>
          <div className="textCountBox">256</div>
        </div>
      </div>
    )
  } else {
    return null;
  }
}

export default Personalization;