import React, { Component } from 'react';
// import FormList from './Form'
class Caps extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
  
      this.state.name =  this.props.name.charAt(0).toUpperCase()+this.props.name.slice(1)
   
    );
  }
}

// function capFirst(s)
// {
//     return s.charAt(0).toUpperCase() + s.slice(1);
// }
export default Caps;