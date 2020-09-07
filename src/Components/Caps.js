import React, { Component } from 'react';
import FormList from './Form'
class Caps extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
  
      <FormList>{(this.handleNameChange.charAt(0).toUpperCase().slice(1))}</FormList>
    );
  }
}

// function capFirst(s)
// {
//     return s.charAt(0).toUpperCase() + s.slice(1);
// }
export default Caps;