import React, { Component } from 'react';

export default class App extends Component {
  render() {
    console.log(this.props);
    return <div>hello {this.props.name}</div>;
  }
}
