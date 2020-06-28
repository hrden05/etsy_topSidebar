import React from 'react';

class Personalization extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charCount: 256,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    let input = event.target.value;
    this.setState({
      charCount: 256 - input.length
    })
  }


  handleClick(e) {
    const element = document.getElementById("description");
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }

  render() {
    if (!this.props.props.personalization) {
      return null;
    } else {
      return (
        <div className="dropdownIndividuals">
          <button className="personalizationButton" onClick={this.handleClick}>
            <span className="personalizationField">
                Add your personalization (optional)
            </span>
            <span className="personalizationButtonArrow" ></span>
          </button>
          <div className="personalizationDescription" id="description">
            <p className="personalizationInstructions">{this.props.props.description}</p>
            <textarea className="textarea" onChange={this.handleChange}></textarea>
            <div className="textCountBox">{this.state.charCount}</div>
          </div>
        </div>
      )
    }
  }
}

export default Personalization;