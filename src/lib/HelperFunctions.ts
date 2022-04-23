import { Color } from '@state/slices/toolbar/ToolbarEditorCustomization.slice';

/**
 *
 * @param color Color parameter from the state
 * @returns the parsed color into rgba syntax as string.
 */
export const parseBackgroundColor = (color: Color): string => {
  const { r, g, b, a } = color;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};
