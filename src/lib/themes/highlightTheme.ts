import { CodeTheme } from 'snappy.types';
import type { HighlightTheme } from 'snappy.types';
import AURORA from './aurora.theme';
import CELESTIAL from './celestial.theme';
import DRACULA from './dracula.theme';
import DUOTONEDARK from './duotoneDark.theme';
import EVA_LIGHT from './evaLight.theme';
import GITHUB from './github.theme';
import MONOKAI from './monokai.theme';
import NIGHT_OWL from './nightOwl.theme';
import NIGHT_OWL_LIGHT from './nightOwlLight.theme';
import OCEANICNEXT from './oceanicNext.theme';
import OKAIDIA from './okaidia.theme';
import ONE_DARK from './oneDark.theme';
import OUTRUN_NIGHT from './outrunNight.theme';
import PALENIGHT from './palenight.theme';
import ROSE_PINE from './rosePine.theme';
import SHADES_OF_PURPLE from './shadesOfPurple.theme';
import SYNTHWAVE84 from './synthwave84';
import VS_DARK from './vsDark.theme';
import VS_LIGHT from './vsLight.theme';
import WINTER_IS_COMING from './winterIsComing.theme';

/**
 *
 * @param theme Theme to retrive data from.
 * @returns {HighlightTheme} the corresponding file to the theme.
 */
export const selectThemeFile = (theme: CodeTheme): HighlightTheme => {
  switch (theme) {
    case CodeTheme.VS_LIGHT:
      return VS_LIGHT;
    case CodeTheme.VS_DARK:
      return VS_DARK;
    case CodeTheme.DRACULA:
      return DRACULA;
    case CodeTheme.NIGHT_OWL:
      return NIGHT_OWL;
    case CodeTheme.NIGHT_OWL_LIGHT:
      return NIGHT_OWL_LIGHT;
    case CodeTheme.SYNTHWAVE84:
      return SYNTHWAVE84;
    case CodeTheme.ONE_DARK:
      return ONE_DARK;
    case CodeTheme.OKAIDIA:
      return OKAIDIA;
    case CodeTheme.SHADES_OF_PURPLE:
      return SHADES_OF_PURPLE;
    case CodeTheme.CELESTIAL:
      return CELESTIAL;
    case CodeTheme.AURORA:
      return AURORA;
    case CodeTheme.WINTER_IS_COMING:
      return WINTER_IS_COMING;
    case CodeTheme.OUTRUN_NIGHT:
      return OUTRUN_NIGHT;
    case CodeTheme.MONOKAI:
      return MONOKAI;
    case CodeTheme.ROSE_PINE:
      return ROSE_PINE;
    case CodeTheme.EVA_LIGHT:
      return EVA_LIGHT;
    case CodeTheme.GITHUB:
      return GITHUB;
    case CodeTheme.OCEANICNEXT:
      return OCEANICNEXT;
    case CodeTheme.DUOTONEDARK:
      return DUOTONEDARK;
    case CodeTheme.PALENIGHT:
      return PALENIGHT;
    default:
      return NIGHT_OWL;
  }
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
