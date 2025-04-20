// @ts-expect-error: no type declarations for this subpath
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// @ts-expect-error: no type declarations for this style subpath
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type Props = {
  code: string;
  language?: string;
};

export default function CodeSyntaxHighlighter({ code, language = 'javascript' }: Props) {
  return (
    <SyntaxHighlighter
      language={language}
      style={tomorrow}
      wrapLines={true}
      showLineNumbers={false}
      customStyle={{
        padding: 'calc(1rem + 0.5vw) calc(1rem + 1vw)',
        height: '25rem',
        fontSize: '1.1rem',
        background: 'transparent',
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
}
