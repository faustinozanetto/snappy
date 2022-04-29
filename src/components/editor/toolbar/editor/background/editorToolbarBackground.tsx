import React from 'react';
import { MdColorLens } from 'react-icons/md';
import EditorToolbarBackgroundGradient from './gradient/editorToolbarBackgroundGradient';
import EditorToolbarBackgroundImage from './image/editorToolbarBackgroundImage';
import EditorToolbarSection from '../../base/editorToolbarSection';
import EditorToolbarBackgroundColor from './color/editorToolbarBackgroundColor';
import {
  selectBackgroundCustomization,
  setBackgroundCustomization,
} from '@state/slices/editor/editorCustomization.slice';
import { useDispatch, useSelector } from 'react-redux';
import { BackgroundType } from 'snappy.types';
import { parseBackgroundColor } from '@lib/helper/helperFunctions';

interface EditorToolbarBackgroundProps {}

const EditorToolbarBackground: React.FC<EditorToolbarBackgroundProps> = ({}) => {
  const dispatch = useDispatch();
  const backgroundCustomization = useSelector(selectBackgroundCustomization);

  const buttonShadow = (): string => {
    const BASE_COLOR = backgroundCustomization.backgroundColor;
    const SHADOW_COLOR = `rgba(${BASE_COLOR?.r}, ${BASE_COLOR?.g}, ${BASE_COLOR?.b}, 0.5)`;

    return `3px 5px 34px -4px ${SHADOW_COLOR}`;
  };

  return (
    <EditorToolbarSection
      sectionName="Background"
      sectionIcon={<MdColorLens />}
      sectionTabs={[
        {
          label: 'Color',
          panel: <EditorToolbarBackgroundColor />,
          onTabSelected: () => {
            dispatch(
              setBackgroundCustomization({
                backgroundType: BackgroundType.COLOR,
              })
            );
          },
        },
        {
          label: 'Gradient',
          panel: (
            <EditorToolbarBackgroundGradient
              defaultColors={backgroundCustomization.backgroundGradient.data.colors}
              defaultType={backgroundCustomization.backgroundGradient.data.type}
            />
          ),
          onTabSelected: () => {
            dispatch(
              setBackgroundCustomization({
                backgroundType: BackgroundType.GRADIENT,
              })
            );
          },
        },
        {
          label: 'Image',
          panel: <EditorToolbarBackgroundImage />,
          onTabSelected: () => {
            dispatch(
              setBackgroundCustomization({
                backgroundType: BackgroundType.IMAGE,
              })
            );
          },
        },
      ]}
      sectionButtonProps={{
        background: parseBackgroundColor(backgroundCustomization.backgroundColor),
        shadow: buttonShadow(),
        _hover: { bg: backgroundCustomization.backgroundColor },
        _focus: { bg: backgroundCustomization.backgroundColor },
        _active: { bg: backgroundCustomization.backgroundColor },
      }}
    />
  );
};
export default EditorToolbarBackground;
