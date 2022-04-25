import { Color } from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { HighlightThemeType } from './themes/HighlightTheme';

/**
 *
 * @param color Color parameter from the state
 * @returns the parsed color into rgba syntax as string.
 */
export const parseBackgroundColor = (color: Color): string => {
  const { r, g, b, a } = color;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

type StyleObj = {
  [key: string]: string | number | null;
};

export const themeToDict = (theme: any, language: any): HighlightThemeType => {
  const { plain } = theme;
  const base: HighlightThemeType = Object.create(null);

  const themeDict = theme.styles.reduce((acc, themeEntry) => {
    const { types, languages, style } = themeEntry;
    if (languages && !languages.includes(language)) {
      return acc;
    }

    themeEntry.types.forEach((type) => {
      const accStyle: StyleObj = { ...acc[type], ...style };
      acc[type] = accStyle;
    });

    return acc;
  }, base);

  themeDict.root = plain;
  themeDict.plain = { ...plain, backgroundColor: null };

  return themeDict;
};
