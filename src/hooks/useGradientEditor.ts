import { useEffect, useState } from 'react';
import type { BackgroundGradient, GradientColor } from 'snappy.types';

/**
 *
 * @param colors Array of colors to generate the gradient from.
 * @param type Wether the gradient is linear or radial.
 * @returns The generated gradient css tring.
 */
const generateGradient = (colors: GradientColor[], type: 'linear' | 'radial') => {
  const cssGradient = colors
    .map((color) => `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a}) ${color.position * 100}%`)
    .join(', ');
  return `${type}-gradient(${type === 'linear' ? 'to right' : 'circle'}, ${cssGradient})`;
};

/**
 * Hook to generate a css gradient using colors and type.
 * @param initialValue The initial value of the gradient.
 * @returns The state, and setters of the hook.
 */
const useGradientEditor = (initialValue: BackgroundGradient) => {
  const { colors: initialColors, type: initialType } = initialValue;
  const [type, setType] = useState<'linear' | 'radial'>(initialType);
  const [colors, setColors] = useState<GradientColor[]>(initialColors);
  const [gradient, setGradient] = useState<string>(generateGradient(initialColors, initialType));

  /**
   * Updates a color given a position.
   * @param color Color to update.
   * @param index Index of the color to update.
   */
  const editColor = (color: GradientColor, index: number) => {
    const newColors = [...colors];
    newColors[index] = color;
    setColors(newColors);
  };

  /**
   * Adds a new color to the gradient
   * @param color Color to add.
   */
  const addColor = (color: GradientColor) => {
    setColors([...colors, color]);
  };

  /**
   * Removes a color from the gradient.
   * @param index Index of the color to remove.
   */
  const removeColor = (index: number) => {
    const newColors = [...colors];
    newColors.splice(index, 1);
    setColors(newColors);
  };

  /**
   * Generate the gradient when colors or type change.
   */
  useEffect(() => {
    setGradient(generateGradient(colors, type));
  }, [colors, type]);

  return {
    colors,
    type,
    gradient,
    setType,
    editColor,
    addColor,
    removeColor,
  };
};

export default useGradientEditor;
