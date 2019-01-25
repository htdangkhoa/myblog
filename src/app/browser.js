import './styles/styles.scss';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { initStore } from './store';
import Router from './RootRouter';

const store = initStore();

render(
  <Provider store={store}>
    <Router {...window.__APP_INITIAL_STATE__} />
  </Provider>,
  document.getElementById('root'),
);
