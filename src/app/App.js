import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from './RootRouter';
import { initStore } from './store';

const store = initStore();

export default class App extends Component {
  render() {
    console.log(this.props);
    return (
      <Provider store={store}>
        <Router {...this.props} />
      </Provider>
    );
  }
}
