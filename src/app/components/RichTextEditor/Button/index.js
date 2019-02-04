import React, { Component } from 'react';
import propTypes from 'prop-types';
import './index.scss';

class Button extends Component {
  render() {
    return (
      <span className="RichTextEditor-button">
        {this.props.label}
      </span>
    );
  }
}

Button.propTypes = {
  label: propTypes.string.isRequired,
};

export default Button;
