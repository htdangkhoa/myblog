import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    document.title = this.props.title;
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(Root);
