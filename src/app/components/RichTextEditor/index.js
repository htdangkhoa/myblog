import React, { Component } from 'react';
import { Editor, EditorState } from 'draft-js';
import Button from './Button';
import './index.scss';

const BUTTONS = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
  { label: 'Blockquote', style: 'blockquote' },
  { label: 'UL', style: 'unordered-list-item' },
  { label: 'OL', style: 'ordered-list-item' },
  { label: 'Code Block', style: 'code-block' },
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Monospace', style: 'CODE' },
];

export default class RichTextEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty(),
    };

    this.onChange = (editorState) => {
      this.setState({ editorState });
    };
  }

  render() {
    return (
      <div className="RichTextEditor-root">
        <div className="RichTextEditor-buttons">
          {BUTTONS.map(button => (
            <Button label={button.label} key={`${React.id()}`} />
          ))}
        </div>
        <Editor
          placeholder="Write your content..."
          editorState={this.state.editorState}
          onChange={this.onChange}
          spellCheck
        />
      </div>
    );
  }
}
