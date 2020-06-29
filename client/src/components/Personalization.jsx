import React from 'react';
import Description from './Description.jsx';

class Personalization extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDescription: false,
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
    switch(e) {
      case "show":
        this.setState({
          showDescription: !this.state.showDescription
        });
      default: null;
    }
  }

  render() {
    if (!this.props.props.personalization) {
      return null;
    } else {
      return (
        <div className="dropdownIndividuals">
          <button className="personalizationButton" onClick={() => this.handleClick("show")}>
            <span className="personalizationField">
                Add your personalization (optional)
            </span>
            {this.state.showDescription
              ?
              <span className="personalizationButtonArrowDown personalizationButtonArrow" ></span>
              :
              <span className="personalizationButtonArrowUpDescrip personalizationButtonArrow"></span>
            }
          </button>
          {this.state.showDescription
            ?
            <Description charCount={this.state.charCount} handleChange={this.handleChange} props={this.props}/>
            :
            null
          }
        </div>

      )

    }
  }
}

export default Personalization;