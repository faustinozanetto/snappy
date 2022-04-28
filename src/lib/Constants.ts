import {
  BackgroundType,
  CodeLanguage,
  CodeTheme,
  EditorCustomizationState,
  FileExtension,
  FontFamily,
} from '@state/slices/editor/ToolbarEditorCustomization.slice';

/**
 * @description Basic code snippet that shows up when page loads by default.
 */
export const EXAMPLE_CODE = `function createElement({ node, style, useInlineStyles, key }) {
  const { properties, type, tagName, value } = node;
  if (type === "text") {
    return value;
  } else if (tagName) {
    const TagName = tagName;
    const childrenCreator = createChildren(style, useInlineStyles);
    const props = (
      useInlineStyles
      ? { style: createStyleObject(properties.className, style) }
      : { className: createClassNameString(properties.className) }
    );
    const children = childrenCreator(node.children);
    return <TagName key={key} {...props}>{children}</TagName>;
  }
}`;

export const CUSTOMIZATION_TEMPLATES: EditorCustomizationState[] = [
  {
    backgroundCustomization: {
      backgroundType: BackgroundType.GRADIENT,
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
        generated: 'linear-gradient(to right, rgba(44,0,177,1) 0%, rgba(245,0,210,1) 100%)',
      },
      backgroundColor: {
        r: 0,
        g: 195,
        b: 255,
        a: 1,
      },
    },
    fontCustomization: {
      fontFamily: FontFamily.JETBRAINSMONO,
      fontSize: 16,
      lineHeight: 1.35,
    },
    codeCustomization: {
      codeTheme: CodeTheme.OUTRUN_NIGHT,
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
  },
  {
    backgroundCustomization: {
      backgroundType: BackgroundType.GRADIENT,
      backgroundImage: '',
      backgroudBlur: 0,
      backgroundGradient: {
        data: {
          colors: [
            {
              r: 0,
              g: 255,
              b: 217,
              a: 1,
              position: 0,
            },
            {
              r: 0,
              g: 213,
              b: 0,
              a: 1,
              position: 1,
            },
          ],
          type: 'linear',
        },
        generated: 'linear-gradient(to right, rgba(0, 255, 217, 1) 0%, rgba(0, 213, 0, 1) 100%)',
      },
      backgroundColor: {
        r: 0,
        g: 195,
        b: 255,
        a: 1,
      },
    },
    fontCustomization: {
      fontFamily: FontFamily.FIRACODE,
      fontSize: 17,
      lineHeight: 1.45,
    },
    codeCustomization: {
      codeTheme: CodeTheme.NIGHT_OWL_LIGHT,
      codeLanguage: CodeLanguage.JSX,
      lineNumbers: true,
    },
    windowCustomization: {
      paddingX: 28.8,
      paddingY: 29.2,
      borderRadius: 20.6,
      controls: true,
      shadow: {
        boxShadow: true,
        boxShadowSize: 3.9,
        boxShadowColor: {
          r: 7,
          g: 208,
          b: 190,
          a: 0.65,
        },
      },
    },
    exportCustomization: {
      fileExtension: FileExtension.PNG,
      sizeMultiplier: 1,
    },
  },
  {
    backgroundCustomization: {
      backgroundType: BackgroundType.COLOR,
      backgroundImage: '',
      backgroudBlur: 0,
      backgroundGradient: {
        data: {
          colors: [
            {
              r: 0,
              g: 255,
              b: 217,
              a: 1,
              position: 0,
            },
            {
              r: 0,
              g: 213,
              b: 0,
              a: 1,
              position: 1,
            },
          ],
          type: 'linear',
        },
        generated: 'linear-gradient(to right, rgba(0, 255, 217, 1) 0%, rgba(0, 213, 0, 1) 100%)',
      },
      backgroundColor: {
        r: 255,
        g: 114,
        b: 0,
        a: 1,
      },
    },
    fontCustomization: {
      fontFamily: FontFamily.FIRACODE,
      fontSize: 17,
      lineHeight: 1.45,
    },
    codeCustomization: {
      codeTheme: CodeTheme.DUOTONEDARK,
      codeLanguage: CodeLanguage.JSX,
      lineNumbers: true,
    },
    windowCustomization: {
      paddingX: 28.8,
      paddingY: 29.2,
      borderRadius: 20.6,
      controls: false,
      shadow: {
        boxShadow: true,
        boxShadowSize: 3.9,
        boxShadowColor: {
          r: 173,
          g: 38,
          b: 1,
          a: 0.65,
        },
      },
    },
    exportCustomization: {
      fileExtension: FileExtension.PNG,
      sizeMultiplier: 1,
    },
  },
];
