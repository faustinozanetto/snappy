import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'state/SnapifyStore';

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
  codeTheme?: CodeTheme;
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

export type ToolBoxEditorCustomizationState = {
  backgroundCustomization: BackgroundCustomization;
  fontCustomization: FontCustomization;
  codeCustomization: CodeCustomization;
  windowCustomization: WindowCustomization;
  exportCustomization: ExportCustomization;
};

const initialState: ToolBoxEditorCustomizationState = {
  backgroundCustomization: {
    backgroundType: BackgroundType.COLOR,
    backgroundImage: '',
    backgroudBlur: 0,
    backgroundGradient: {
      data: {
        colors: [
          {
            r: 44,
            g: 0,
            b: 177,
            a: 1,
            position: 0,
          },
          {
            r: 245,
            g: 0,
            b: 210,
            a: 1,
            position: 1,
          },
        ],
        type: 'linear',
      },
      generated:
        'linear-gradient(to right, rgba(44,0,177,1) 0%, rgba(245,0,210,1) 100%)',
    },
    backgroundColor: {
      r: 0,
      g: 195,
      b: 255,
      a: 1.0,
    },
  },
  fontCustomization: {
    fontFamily: FontFamily.JETBRAINSMONO,
    fontSize: 16,
    lineHeight: 1.25,
  },
  codeCustomization: {
    codeTheme: CodeTheme.EVA_LIGHT,
    codeLanguage: CodeLanguage.JSX,
    lineNumbers: true,
  },
  windowCustomization: {
    paddingX: 20,
    paddingY: 25.5,
    borderRadius: 20,
    controls: true,
    shadow: {
      boxShadow: true,
      boxShadowSize: 3,
      boxShadowColor: {
        r: 43,
        g: 70,
        b: 231,
        a: 0.65,
      },
    },
  },
  exportCustomization: {
    fileExtension: FileExtension.PNG,
    sizeMultiplier: 1,
  },
};

export const ToolBoxEditorCustomizationSlice = createSlice({
  name: 'toolboxEditorCustomization',
  initialState,
  reducers: {
    setBackgroundCustomization: (
      state,
      action: PayloadAction<BackgroundCustomization>
    ) => {
      Object.assign(state.backgroundCustomization, action.payload);
    },
    setFontCustomization: (state, action: PayloadAction<FontCustomization>) => {
      Object.assign(state.fontCustomization, action.payload);
    },
    setCodeCustomization: (state, action: PayloadAction<CodeCustomization>) => {
      Object.assign(state.codeCustomization, action.payload);
    },
    setWindowCustomization: (
      state,
      action: PayloadAction<WindowCustomization>
    ) => {
      Object.assign(state.windowCustomization, action.payload);
    },
    setExportCustomization: (
      state,
      action: PayloadAction<ExportCustomization>
    ) => {
      Object.assign(state.exportCustomization, action.payload);
    },
  },
});

export const {
  setBackgroundCustomization,
  setCodeCustomization,
  setFontCustomization,
  setWindowCustomization,
  setExportCustomization,
} = ToolBoxEditorCustomizationSlice.actions;

export const selectBackgroundCustomization = (state: RootState) =>
  state.toolboxEditor.backgroundCustomization;
export const selectCodeCustomization = (state: RootState) =>
  state.toolboxEditor.codeCustomization;
export const selectFontCustomization = (state: RootState) =>
  state.toolboxEditor.fontCustomization;
export const selectWindowCustomization = (state: RootState) =>
  state.toolboxEditor.windowCustomization;
export const selectExportCustomization = (state: RootState) =>
  state.toolboxEditor.exportCustomization;
