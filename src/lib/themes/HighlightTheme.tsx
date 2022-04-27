import React from 'react';
import {
  CodeTheme,
  selectWindowCustomization,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { DRACULA } from './Dracula.theme';
import { NIGHT_OWL } from './NightOwl.theme';
import { NIGHT_OWL_LIGHT } from './NightOwlLight.theme';
import { ONE_DARK } from './OneDark.theme';
import { SYNTHWAVE84 } from './Synthwave84';
import { VS_DARK } from './VsDark.theme';
import { OKAIDIA } from './Okaidia.theme';
import { SHADES_OF_PURPLE } from './ShadesOfPurple.theme';
import { CELESTIAL } from './Celestial.theme';
import { AURORA } from './Aurora.theme';
import { WINTER_IS_COMING } from './WinterIsComing.theme';
import { OUTRUN_NIGHT } from './OutrunNight.theme';
import { MONOKAI } from './Monokai.theme';
import { ROSE_PINE } from './RosePine.theme';
import { EVA_LIGHT } from './EvaLight.theme';
import { VS_LIGHT } from './VsLiight.theme';
import { GITHUB } from './Github.theme';
import { OCEANICNEXT } from './OceanicNext.theme';
import { DUOTONEDARK } from './DuotoneDark.theme';
import { PALENIGHT } from './Palenight.theme';
import { useSelector } from 'react-redux';

export type ThemeData = {
  types: string[];
  style: React.CSSProperties;
};

export type HighlightThemeType = {
  name: string;
  type: CodeTheme;
  plain: {
    color: string;
    backgroundColor: string;
  };
  additionalCSS?: string;
  styles: ThemeData[];
};

export const selectThemeFile = (theme: CodeTheme): HighlightThemeType => {
  console.log({ theme });
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

const ConstructCSSStyle = (theme: HighlightThemeType): string => {
  const cssStyle = theme.styles.map((style) => {
    const css = style.types.map((type) => {
      // Convert CSS object to string
      const styleString = Object.entries(style.style).reduce(
        (acc, [key, value]) => {
          return `${acc}${key}: ${value};`;
        },
        ''
      );
      return `.${type} { ${styleString} }`;
    });
    return css.join('\n');
  });
  return cssStyle.join('\n');
};

export const GenerateHighlight = (theme: HighlightThemeType) => {
  const windowCustomization = useSelector(selectWindowCustomization);
  return (
    <style jsx global>{`
      ${ConstructCSSStyle(theme).concat(`
      .code-wrapper {
        color: ${theme.plain.color} !important;
        background-color: ${theme.plain.backgroundColor} !important;
      }

      .prism-code {
        margin: 0 !important;
        padding: 0 !important;
        overflow: hidden !important;
      }
      .npm__react-simple-code-editor__textarea {
        margin-top: ${
          windowCustomization.controls ? '2em !important' : '0 !important'
        };
      }
      .npm__react-simple-code-editor__textarea:focus-visible {
        outline: none !important;
        border: none !important;
      }
    
      `)}
    `}</style>
  );
};
