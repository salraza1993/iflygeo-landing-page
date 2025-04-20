declare module 'react-syntax-highlighter' {
  export interface SyntaxHighlighterProps {
    language?: string;
    style?: object;
    wrapLines?: boolean;
    showLineNumbers?: boolean;
    customStyle?: React.CSSProperties;
    children?: React.ReactNode;
  }

  export class Prism extends React.Component<SyntaxHighlighterProps> {}
}

declare module 'react-syntax-highlighter/dist/cjs/styles/prism';
import { duotoneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
