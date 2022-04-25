import { themeToDict } from '@lib/HelperFunctions';
import { HighlightThemeType } from '@lib/themes/HighlightTheme';
import Prism from 'prismjs';
import React, { Key, useEffect, useState } from 'react';

type PrismGrammar = {
  [key: string]: any;
};

type LanguagesDict = {
  [lang: string]: PrismGrammar;
};

type PrismToken = {
  type: string | string[];
  alias: string | string[];
  content: Array<PrismToken | string> | string;
};

type Token = {
  types: string[];
  content: string;
  empty?: boolean;
};

type PrismThemeEntry = {
  color?: string;
  backgroundColor?: string;
  fontStyle?: 'normal' | 'italic';
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
  opacity?: number;
  [styleKey: string]: string | number | void;
};

type PrismTheme = {
  plain: PrismThemeEntry;
  styles: Array<{
    types: string[];
    style: PrismThemeEntry;
    languages?: string[];
  }>;
};

type PrismLib = {
  languages: LanguagesDict;
  tokenize: (
    code: string,
    grammar: PrismGrammar,
    language: any
  ) => Array<PrismToken | string>;
  highlight: (code: string, grammar: PrismGrammar, language: any) => string;
  hooks: {
    run: (
      name: string,
      env: { code: string; grammar: PrismGrammar; language: any }
    ) => void;
  };
};
export type StyleObj = {
  [key: string]: string | number | null;
};

type LineInputProps = {
  key?: Key;
  style?: StyleObj;
  className?: string;
  line: Token[];
  [key: string]: any;
};

type LineOutputProps = {
  key?: Key;
  style?: StyleObj;
  className: string;
  [key: string]: any;
};

type TokenInputProps = {
  key?: Key;
  style?: StyleObj;
  className?: string;
  token: Token;
  [key: string]: any;
};

type TokenOutputProps = {
  key?: Key;
  style?: StyleObj;
  className: string;
  children: string;
  [key: string]: any;
};

type RenderProps = {
  tokens: Token[][];
  className: string;
  getLineProps: (input: LineInputProps) => LineOutputProps;
  getTokenProps: (input: TokenInputProps) => TokenOutputProps;
};

interface CodeHighlightingProps {
  theme?: any;
  prism: PrismLib;
  code: string;
  language: string;
  children?: (props: RenderProps) => React.ReactNode;
}

export const CodeHighlighting: React.FC<CodeHighlightingProps> = (props) => {
  const { prism, code, language, theme, children } = props;
  const [themeDict, setThemeDict] = useState<HighlightThemeType>();
  const [prevTheme, setPrevTheme] = useState<PrismTheme>();
  const [prevLanguage, setPrevLanguage] = useState('');

  const getThemeDict = (): HighlightThemeType => {
    if (
      themeDict !== null &&
      theme === prevTheme &&
      language === prevLanguage
    ) {
      return themeDict;
    }

    setPrevTheme(theme);
    setPrevLanguage(language);

    const newThemeDict = theme ? themeToDict(theme, language) : null;
    setThemeDict(newThemeDict);
    return newThemeDict;
  };

  const getLineProps = ({
    key,
    className,
    style,
    line,
    ...rest
  }: LineInputProps): LineOutputProps => {
    const output: LineOutputProps = {
      ...rest,
      className: 'token-line',
      style: null,
      key: null,
    };

    const locThemeDict = getThemeDict();
    if (locThemeDict !== null) {
      output.style = locThemeDict.plain;
    }

    if (style !== null) {
      output.style =
        output.style !== null ? { ...output.style, ...style } : style;
    }

    if (key !== null) {
      output.key = key;
    }
    if (className) {
      output.className += ` ${className}`;
    }
    return output;
  };

  const getStyleForToken = ({ types, empty }: Token) => {
    const typesSize = types.length;
    const locThemeDict = getThemeDict();

    if (locThemeDict === null) return null;
    else if (typesSize === 1 && types[0] === 'plain')
      return empty ? { display: 'inline-block' } : null;
    else if (typesSize === 1 && !empty) return themeDict[types[0]];

    const baseStyle = empty ? { display: 'inline-block' } : {};
    const typesStyles = types.map((type) => themeDict[type]);
    return Object.assign(baseStyle, ...typesStyles);
  };

  const getTokenProps = ({
    key,
    className,
    style,
    token,
    ...rest
  }: TokenInputProps): TokenOutputProps => {
    const output: TokenOutputProps = {
      ...rest,
      className: `token ${token.types.join(' ')}`,
      children: token.content,
      style: getStyleForToken(token),
      key: null,
    };
    if (style !== null) {
      output.style =
        output.style !== null ? { ...output.style, ...style } : style;
    }

    if (key !== null) output.key = key;
    if (className) output.className += ` ${className}`;
    return output;
  };

  const tokenize = (
    prism: PrismLib,
    code: string,
    grammar: PrismGrammar,
    language: string
  ): Array<PrismToken | string> => {
    const env = {
      code,
      grammar,
      language,
      tokens: [],
    };

    Prism.hooks.run('before-tokenize', env);
    const tokens = (env.tokens = Prism.tokenize(env.code, env.grammar));
    Prism.hooks.run('after-tokenize', env);
    return tokens;
  };

  useEffect(() => {
    setThemeDict(getThemeDict());
  }, []);

  return <>{children}</>;
};
