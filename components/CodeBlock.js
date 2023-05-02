import { useState } from 'react';
import { Highlight, themes, defaultProps } from 'prism-react-renderer';
import copy from 'copy-to-clipboard';
import { FaCopy } from 'react-icons/fa';

const CodeBlock = ({ children, className = '' }) => {
  const [isCopied, setIsCopied] = useState(false);
  const language = className.replace(/language-/, '');

  const handleCopyClick = () => {
    copy(children);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  };

  return (
    <div className="relative group">
      <div className="flex justify-between items-center bg-gray-900 text-sm py-1 px-2 rounded-t-md">
        <span className="text-gray-400">{language}</span>
        <button
          onClick={handleCopyClick}
          className="flex items-center bg-gray-700 rounded-md text-gray-400 py-1 px-2 group-hover:text-white focus:outline-none"
        >
          {isCopied ? (
            <span>Copied!</span>
          ) : (
            <>
              <FaCopy className="mr-1" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <Highlight {...defaultProps} code={children.trim()} language={language} theme={themes.dracula}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${className} bg-gray-900 text-white p-4 rounded-b-md`} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeBlock;
