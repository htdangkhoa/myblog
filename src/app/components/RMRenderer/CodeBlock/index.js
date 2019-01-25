import 'highlight.js/styles/github.css';
import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import ReactHighLight from 'react-highlight';

class CodeBlock extends PureComponent {
  render() {
    return <ReactHighLight language={this.props.language}>{this.props.value}</ReactHighLight>;
  }
}

CodeBlock.defaultProps = {
  language: '',
};

CodeBlock.propTypes = {
  value: propTypes.string.isRequired,
  language: propTypes.string,
};

export default CodeBlock;
