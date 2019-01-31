import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContext;
  //hook up context object to class component
  //contextType is a special keyword in react and needs to be that word
  //contextType adds a property to the class

  
  //static is not assigned to an instance of a class but is added directly to the class itself

  render() {
    const text = this.context === 'english' ? 'Name' : 'Naam';

    return (
      <div className="ui field">
        <label>
          {text}
        </label>
        <input />
      </div>
    );
  }
}

export default Field;