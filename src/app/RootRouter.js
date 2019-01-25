import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Root from './components/Root';
import Header from './components/Header';
import App from './App';
import About from './pages/About';
import Articles from './pages/Articles';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';

const renderRootComponent = ({ title = 'MyBlog', component }) => (
  <Root title={title}>{component || null}</Root>
);

export default class RootRouter extends Component {
  componentWillReceiveProps() {
    console.log(this.props);
  }

  render() {
    return (
      <Router>
        <div>
          <Header />

          <Switch>
            <Route
              exact
              path="/"
              component={() => renderRootComponent({ component: <Articles /> })}
            />

            <Route
              exact
              path="/about"
              component={() => renderRootComponent({ title: 'About', component: <About /> })}
            />

            <Route
              exact
              path="/articles"
              component={() => renderRootComponent({ title: 'Aticles', component: <Articles /> })}
            />

            <Route
              exact
              path="/projects"
              component={() => renderRootComponent({ title: 'Projects', component: <Projects /> })}
            />

            <Route
              component={() => renderRootComponent({ title: 'Page not found', component: <NotFound /> })
              }
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
