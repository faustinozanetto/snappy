import { useEffect, useState } from 'react';
import {
  BackgroundGradient,
  GradientColor,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';

export const useGradientEditor = (initialValue: BackgroundGradient) => {
  const { colors: initialColors, type } = initialValue;
  const [colors, setColors] = useState<GradientColor[]>(initialColors);
  const [gradient, setGradient] = useState<string>('');

  const editColor = (color: GradientColor, index: number) => {
    const newColors = [...colors];
    newColors[index] = color;
    setColors(newColors);
  };

  const generateGradient = () => {
    const gradient = colors
      .map(
        (color) =>
          `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a}) ${
            color.position * 100
          }%`
      )
      .join(', ');
    return `${type}-gradient(to right, ${gradient})`;
  };

  const addColor = (color: GradientColor) => {
    setColors([...colors, color]);
  };

  const removeColor = (index: number) => {
    const newColors = [...colors];
    newColors.splice(index, 1);
    setColors(newColors);
  };

  useEffect(() => {
    setGradient(generateGradient());
  }, [colors]);

  return {
    colors,
    gradient,
    editColor,
    addColor,
    removeColor,
  };
};
