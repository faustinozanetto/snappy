import React from 'react';
import { MdColorLens } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { BackgroundType } from 'snappy.types';

import { parseBackgroundColor } from '@lib/helper/helperFunctions';
import {
  selectBackgroundCustomization,
  setBackgroundCustomization,
} from '@state/slices/editor/editorCustomization.slice';
import type { ButtonProps } from '@chakra-ui/react';
import EditorToolbarSection from '../../base/editorToolbarSection';
import EditorToolbarBackgroundColor from './color/editorToolbarBackgroundColor';
import EditorToolbarBackgroundGradient from './gradient/editorToolbarBackgroundGradient';
import EditorToolbarBackgroundImage from './image/editorToolbarBackgroundImage';

interface EditorToolbarBackgroundProps {}

const EditorToolbarBackground: React.FC<EditorToolbarBackgroundProps> = ({}) => {
  const dispatch = useDispatch();
  const backgroundCustomization = useSelector(selectBackgroundCustomization);

  /** Generates the color for the button depending the background type.  */
  // TODO: Add support for gradient shadow, may require to modify the way we display shadows.
  const generateButtonStyles = (): ButtonProps => {
    const styles: ButtonProps = {};
    // Background
    if (backgroundCustomization.backgroundType === BackgroundType.COLOR && backgroundCustomization.backgroundColor) {
      styles.background = `${parseBackgroundColor(backgroundCustomization.backgroundColor)} !important`;
      styles._hover = {
        background: `${parseBackgroundColor(backgroundCustomization.backgroundColor)} !important`,
      };
      styles._focus = {
        background: `${parseBackgroundColor(backgroundCustomization.backgroundColor)} !important`,
      };
    } else if (
      backgroundCustomization.backgroundType === BackgroundType.GRADIENT &&
      backgroundCustomization.backgroundGradient
    ) {
      styles.background = `${backgroundCustomization.backgroundGradient.generated} !important`;
    }

    // Shadow
    if (backgroundCustomization.backgroundType === BackgroundType.COLOR) {
      styles.boxShadow = `3px 5px 34px -4px ${styles.background}`;
    }

    return styles;
  };

  /**
   *
   * @returns The index of the tab to open depending on the background type.
   */
  const defaultBackgroundSection = (): 0 | 1 | 2 => {
    let section: 0 | 1 | 2 = 0;
    if (backgroundCustomization.backgroundType === BackgroundType.COLOR) {
      section = 0;
    } else if (backgroundCustomization.backgroundType === BackgroundType.GRADIENT) {
      section = 1;
    } else if (backgroundCustomization.backgroundType === BackgroundType.IMAGE) {
      section = 2;
    }
    return section;
  };

  return (
    <EditorToolbarSection
      defaultSection={defaultBackgroundSection()}
      sectionName="Background"
      sectionIcon={<MdColorLens />}
      sectionButtonProps={generateButtonStyles()}
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
          panel: <EditorToolbarBackgroundGradient />,
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
    />
  );
};
export default EditorToolbarBackground;
