import type { HighlightTheme } from 'snappy.types';

import themes from './themes.json';

export const getThemeByType = (type: string): HighlightTheme => {
  const themeFile: HighlightTheme = themes.themes.find((t) => t.type === type);
  return themeFile;
};

/**
 *
 * @returns an array of tuples containing, first the type, second the theme of all the themes.
 */
export const getThemeList = (): [string, string][] => {
  const themeList: [string, string][] = [];
  themes.themes.forEach((theme) => {
    themeList.push([theme.type, theme.name]);
  });
  return themeList;
};

/**
 *
 * @param theme Theme to retrive data from.
 * @returns {string} the generated css style for the theme.
 */
export const constructCSSStyle = (theme: HighlightTheme): string => {
  const cssStyle = theme.styles.map((style) => {
    const css = style.types.map((type) => {
      // Convert CSS object to string
      const styleString = Object.entries(style.style).reduce((acc, [key, value]) => {
        return `${acc}${key}: ${value};`;
      }, '');
      return `.${type} { ${styleString} }`;
    });
    return css.join('\n');
  });
  return cssStyle.join('\n');
};
