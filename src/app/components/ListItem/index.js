import React, { Component } from 'react';

export default class ListItem extends Component {
  render() {
    const {
      link, title, content, last, newTab,
    } = this.props;

    return (
      <div>
        <a href={link} target={newTab ? 'blank' : null}>
          <h3>{title}</h3>
        </a>
        <p>{content || 'No description.'}</p>
        {!last && <hr />}
      </div>
    );
  }
}
