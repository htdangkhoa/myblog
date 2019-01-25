import React, { Component } from 'react';

export default class Link extends Component {
  render() {
    return <a href={this.props.href} target="blank">{this.props.children}</a>;
  }
}
