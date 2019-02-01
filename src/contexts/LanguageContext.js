import React from 'react';

const Context = React.createContext('');
// Context is a keyword that can be used to create Components in JSX

export class LanguageStore extends React.Component {
  state = { language: 'english '};

  onLanguageChange = (language) => {
    this.setState({ language });
  }

  render () {
    return (
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Context;

// import Context from '..';
// import { LanguageStore } from '..';


//***THIS RETURNS AN OBJECT AS THE VALUE OF A CONTEXT IN <Context.Provider value> */