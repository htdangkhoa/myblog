import React, { Component } from 'react';

export default class Image extends Component {
  render() {
    console.log(this.props);
    return <img src={this.props.src} alt={this.props.alt} />;
  }
}
