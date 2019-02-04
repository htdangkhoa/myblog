import './styles/styles.scss';
import React from 'react';
import { render } from 'react-dom';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import shortId from 'shortid';
import { initStore } from './store';
import Router from './RootRouter';
import App from './App';

React.id = () => shortId.generate();

const store = initStore();

render(<App {...window.__APP_INITIAL_STATE__} />, document.getElementById('root'));
