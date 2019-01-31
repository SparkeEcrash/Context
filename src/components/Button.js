import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

export class Button extends Component {

  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Voorlegen';
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
      {/* //this approach is necessary when using multiple contexts */}
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    )
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    )
  }
}

// Button.contextType = LanguageContext;
// another way to add contextType not using static method

export default Button
