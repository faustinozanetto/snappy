import type { EditorPreset } from 'snappy.types';
import { BackgroundType, CodeLanguage, CodeTheme, FileExtension, FontFamily, Presets } from 'snappy.types';

export const __PROD__ = process.env.NODE_ENV === 'production';
export const __GTAGID__ = process.env.NEXT_PUBLIC_GTM;

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

export const CUSTOMIZATION_TEMPLATES: EditorPreset[] = [
  {
    name: Presets.DEFAULT,
    theme: {
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
  },
  {
    name: Presets.GRADIENTY,
    theme: {
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
  },
  {
    name: Presets.LIGHTY,
    theme: {
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
          g: 255,
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
        codeTheme: CodeTheme.EVA_LIGHT,
        codeLanguage: CodeLanguage.JSX,
        lineNumbers: true,
      },
      windowCustomization: {
        paddingX: 33.8,
        paddingY: 19.65,
        borderRadius: 23.3,
        controls: true,
        shadow: {
          boxShadow: true,
          boxShadowSize: 4.5,
          boxShadowColor: {
            r: 72,
            g: 67,
            b: 67,
            a: 0.65,
          },
        },
      },
      exportCustomization: {
        fileExtension: FileExtension.PNG,
        sizeMultiplier: 1,
      },
    },
  },
  {
    name: Presets.LIGHTANDFIRE,
    theme: {
      backgroundCustomization: {
        backgroundType: BackgroundType.GRADIENT,
        backgroundImage: '',
        backgroudBlur: 0,
        backgroundGradient: {
          data: {
            colors: [
              {
                r: 255,
                g: 31,
                b: 0,
                a: 1,
                position: 0,
              },
              {
                r: 0,
                g: 242,
                b: 250,
                a: 1,
                position: 1,
              },
            ],
            type: 'linear',
          },
          generated: 'linear-gradient(to right, rgba(255, 31, 0, 1) 0%, rgba(0, 242, 250, 1) 100%)',
        },
        backgroundColor: {
          r: 241,
          g: 46,
          b: 46,
          a: 1,
        },
      },
      fontCustomization: {
        fontFamily: FontFamily.JETBRAINSMONO,
        fontSize: 15,
        lineHeight: 1.55,
      },
      codeCustomization: {
        codeTheme: CodeTheme.CELESTIAL,
        codeLanguage: CodeLanguage.JSX,
        lineNumbers: true,
      },
      windowCustomization: {
        paddingX: 29.6,
        paddingY: 33.8,
        borderRadius: 23.3,
        controls: true,
        shadow: {
          boxShadow: true,
          boxShadowSize: 4.4,
          boxShadowColor: {
            r: 2,
            g: 60,
            b: 232,
            a: 0.45,
          },
        },
      },
      exportCustomization: {
        fileExtension: FileExtension.PNG,
        sizeMultiplier: 1,
      },
    },
  },
];
