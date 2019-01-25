import './styles.scss';
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../components/RMRenderer/CodeBlock';
import Link from '../../components/RMRenderer/Link';
import profile from './profile';

export default class About extends Component {
  render() {
    return (
      <article className="markdown-body">
        <ReactMarkdown
          source={profile}
          escapeHtml={false}
          renderers={{ code: CodeBlock, link: Link }}
        />
      </article>
    );
  }
}
