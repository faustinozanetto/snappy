/* eslint-disable no-shadow */
/*= ====================== STATE ======================== */

import type { Key } from 'react';

export enum BackgroundType {
  COLOR = 'color',
  IMAGE = 'image',
  GRADIENT = 'gradient',
}

export enum CodeTheme {
  ONE_DARK = 'One Dark',
  DRACULA = 'Dracula',
  NIGHT_OWL = 'Night Owl',
  NIGHT_OWL_LIGHT = 'Night Owl Light',
  VS_LIGHT = 'Vs Light',
  VS_DARK = 'Vs Dark',
  SYNTHWAVE84 = 'Synthwave84',
  OKAIDIA = 'Okaidia',
  SHADES_OF_PURPLE = 'Shades of Purple',
  CELESTIAL = 'Celestial',
  AURORA = 'Aurora',
  WINTER_IS_COMING = 'Winter is coming',
  OUTRUN_NIGHT = 'Outrun Night',
  MONOKAI = 'Monokai',
  ROSE_PINE = 'Rose Pine',
  EVA_LIGHT = 'Eva Light',
  GITHUB = 'Github',
  OCEANICNEXT = 'Oceanicnext',
  DUOTONEDARK = 'Duotone Dark',
  PALENIGHT = 'Palenight',
}

export enum CodeLanguage {
  MARKUP = 'markup',
  BASH = 'bash',
  CLIKE = 'clike',
  C = 'c',
  CPP = 'cpp',
  CSS = 'css',
  JAVASCRIPT = 'javascript',
  JSX = 'jsx',
  COFFESCRIPT = 'coffeescript',
  ACTIONSCRIPT = 'actionscript',
  CSSEXTR = 'css-extr',
  DIFF = 'diff',
  GIT = 'git',
  GO = 'go',
  GRAPHQL = 'graphql',
  HANDLEBARS = 'handlebars',
  JSON = 'json',
  LESS = 'less',
  MAKEFILE = 'makefile',
  MARKDOWN = 'markdown',
  OBJECTIVEC = 'objectivec',
  OCAML = 'ocaml',
  PYTHON = 'python',
  REASON = 'reason',
  SASS = 'sass',
  SCSS = 'scss',
  SQL = 'sql',
  STYLUS = 'stylus',
  TSX = 'tsx',
  TYPESCRIPT = 'typescript',
  WASM = 'wasm',
  YAML = 'yaml',
}

export enum FontFamily {
  POPPINS = 'Poppins',
  MONONOKI = 'Mononokai',
  FIRACODE = 'Fira Code',
  COURIERPRIME = 'Courier Prime',
  JETBRAINSMONO = 'JetBrains Mono',
  SPACEMONO = 'Space Mono',
  SOURCECODEPRO = 'Source Code Pro',
}

export type Color = {
  r: number;
  g: number;
  b: number;
  a: number;
};

export type GradientColor = Color & {
  position: number;
};

export type BackgroundGradient = {
  colors: GradientColor[];
  type: 'linear' | 'radial';
};

export type BackgroundCustomization = {
  backgroundType?: BackgroundType;
  backgroundColor?: Color;
  backgroundGradient?: {
    data: BackgroundGradient;
    generated: string;
  };
  backgroundImage?: string;
  backgroudBlur?: number;
};

export type FontCustomization = {
  fontFamily?: FontFamily;
  fontSize?: number;
  lineHeight?: number;
};

export type CodeCustomization = {
  codeTheme?: string;
  codeLanguage?: CodeLanguage;
  lineNumbers?: boolean;
};

export type WindowShadow = {
  boxShadow?: boolean;
  boxShadowSize?: number;
  boxShadowColor?: Color;
};

export type WindowCustomization = {
  paddingX?: number;
  paddingY?: number;
  borderRadius?: number;
  shadow?: WindowShadow;
  controls?: boolean;
};

export enum FileExtension {
  BLOB = 'blob',
  PNG = 'png',
  SVG = 'svg',
  JPEG = 'jpeg',
}

export type ExportCustomization = {
  fileExtension?: FileExtension;
  sizeMultiplier?: 1 | 2 | 3 | 4;
};

export type EditorCustomizationState = {
  backgroundCustomization: BackgroundCustomization;
  fontCustomization: FontCustomization;
  codeCustomization: CodeCustomization;
  windowCustomization: WindowCustomization;
  exportCustomization: ExportCustomization;
};

export type SnappyState = {
  customizationPreset: Presets;
};

/*= ==================== THEMING ====================== */
export type ThemeData = {
  types: string[];
  style: React.CSSProperties;
};

export type HighlightTheme = {
  name: string;
  type: string;
  plain: {
    color: string;
    backgroundColor: string;
  };
  additionalCSS?: string;
  styles: ThemeData[];
};

/*= ================== SHADOW ======================== */
export type BackgroundShadowEntry = {
  color: string;
  size: [number, number, number];
};

/*= =================== TOOLBAR ====================== */
export type ToolbarSectionTab = {
  /** Label of the section */
  label: string;
  /** Component to render inside the section */
  panel: React.ReactNode;
  /** Method called when tab is selected */
  onTabSelected?: () => void;
};

/*= ================== CODE HIGHLIGHT ====================== */
export type Token = {
  types: string[];
  content: string;
  empty?: boolean;
};

export type LineInputProps = {
  key?: Key;
  style?: React.CSSProperties;
  className?: string;
  line: Token[];
  [key: string]: any;
};

export type LineOutputProps = {
  key?: Key;
  style?: React.CSSProperties;
  className: string;
  [key: string]: any;
};

export type TokenInputProps = {
  key?: Key;
  style?: React.CSSProperties;
  className?: string;
  token: Token;
  [key: string]: any;
};

export type TokenOutputProps = {
  key?: Key;
  style?: React.CSSProperties;
  className: string;
  children: string;
  [key: string]: any;
};

export type RenderProps = {
  tokens: Token[][];
  className: string;
  style: HighlightTheme;
  getLineProps: (input: LineInputProps) => LineOutputProps;
  getTokenProps: (input: TokenInputProps) => TokenOutputProps;
};

/*= =================== PRESETS ===================== */
export enum Presets {
  DEFAULT = 'default',
  GRADIENTY = 'gradienty',
  LIGHTY = 'lighty',
  LIGHTANDFIRE = 'Light and Fire',
}
export type EditorPreset = {
  name: Presets;
  theme: EditorCustomizationState;
};
