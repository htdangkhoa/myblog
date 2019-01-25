import './styles.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <nav className="bg-white nav-container sticky-top">
        <div className="container">
          <div className="nav-wrapper">
            <Link className="nav-link" to="/">
              <h3 className="text-center">MyBlog</h3>
            </Link>

            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/articles">
                  Articles
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
