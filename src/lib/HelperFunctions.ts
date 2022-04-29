import { Color, EditorCustomizationState, Presets } from 'snappy.types';
import { CUSTOMIZATION_TEMPLATES } from './constants';

/**
 *
 * @param color Color parameter from the state
 * @returns the parsed color into rgba syntax as string.
 */
export const parseBackgroundColor = (color: Color): string => {
  const { r, g, b, a } = color;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

/**
 *
 * @param preset Preset parameter from the state
 * @returns the corresponding theme customization object from the presets.
 */
export const parseCustomizationPreset = (preset: Presets): EditorCustomizationState => {
  const PRESET = CUSTOMIZATION_TEMPLATES.find((p) => p.name === preset);
  if (PRESET) {
    return PRESET.theme;
  }
};

/**
 *
 * @param string String to capitalize
 * @returns the string with the first letter capitalized.
 */
export const capitalizeString = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
