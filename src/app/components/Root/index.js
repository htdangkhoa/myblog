import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Header';

class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    document.title = this.props.title;

    return (
      <div>
        {this.props.nav && <Header />}

        <div className="container">{this.props.children}</div>
      </div>
    );
  }
}

export default withRouter(Root);
