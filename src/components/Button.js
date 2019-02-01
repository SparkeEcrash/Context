import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

export class Button extends Component {

  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Voorlegen';
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
      {/* //this approach is necessary when using multiple contexts */}
        <LanguageContext.Consumer>
          {( { language } ) => this.renderSubmit(language)}
          {/* value={{ ...this.state **OR** {language: english}, onLanguageChange: this.onLanguageChange }}> */}
          {/* value is equal to an object rather than a string */}
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
