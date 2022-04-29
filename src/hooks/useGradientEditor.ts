import { useEffect, useState } from 'react';
import { BackgroundGradient, GradientColor } from 'snappy.types';

export const useGradientEditor = (initialValue: BackgroundGradient) => {
  const { colors: initialColors, type: initialType } = initialValue;
  const [type, setType] = useState<'linear' | 'radial'>(initialType);
  const [colors, setColors] = useState<GradientColor[]>(initialColors);
  const [gradient, setGradient] = useState<string>('');

  const editColor = (color: GradientColor, index: number) => {
    const newColors = [...colors];
    newColors[index] = color;
    setColors(newColors);
  };

  const generateGradient = () => {
    const gradient = colors
      .map((color) => `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a}) ${color.position * 100}%`)
      .join(', ');
    return `${type}-gradient(${type === 'linear' ? 'to right' : 'circle'}, ${gradient})`;
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
  }, [colors, type]);

  return {
    colors,
    gradient,
    setType,
    editColor,
    addColor,
    removeColor,
  };
};
