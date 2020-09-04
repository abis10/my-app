import React, { Component } from 'react';

class Caps extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      capFirst()
    );
  }
}

function capFirst(s)
{
    return s.charAt(0).toUpperCase() + s.slice(1);
}
export default Caps;