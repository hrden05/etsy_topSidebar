import React from 'react';

const Description = (props) => {
  console.log("Description:", props)
  return (
    <div className="personalizationDescription">
      <p className="personalizationInstructions">{props.props.props.description}</p>
      <textarea className="textarea" onChange={props.handleChange}></textarea>
      <div className="textCountBox">{props.charCount}</div>
    </div>
  )
}

export default Description;