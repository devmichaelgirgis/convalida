import React, { Component } from 'react';
import PropTypes from 'prop-types';
import prettify from 'code-prettify';

class Code extends Component {

  static defaultProps = {
    colorize: true
  };

  render() {
    const { code, colorize, language } = this.props;
    const formattedCode = code.replace(/(?:\r\n|\r|\n)/g, '<br>');
    const codeData = prettify.prettyPrintOne(formattedCode, language);
    const codeClassName = language !== undefined ? `language-${language}` : undefined;
    console.log(colorize);
    return (
      <code className={codeClassName}>
        <div
          style={{ whiteSpace: 'pre-wrap' }}
          dangerouslySetInnerHTML={{__html: colorize ? codeData : formattedCode }} />
      </code>
    );
  }
};

Code.propTypes = {
  code: PropTypes.string.isRequired,
  colorize: PropTypes.bool,
  language: PropTypes.string
};

export default Code;