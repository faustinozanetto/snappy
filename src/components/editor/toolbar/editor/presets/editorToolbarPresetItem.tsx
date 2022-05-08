import React from 'react';
import Button from '@components/ui/button/button';
import { Flex } from '@chakra-ui/react';

interface EditorToolbarPresetItemProps {
  /** Image to show as background for the preset */
  thumbnail: string;
  /** Fallback to color of the preset if no image found */
  background: string;
  /** Called when preset is clicked */
  onSelected: () => void;
}

const EditorToolbarPresetItem: React.FC<EditorToolbarPresetItemProps> = (props) => {
  const { thumbnail, background, onSelected } = props;
  return (
    <Flex flex="0 0 125px" position="relative">
      <Button
        aria-label="Select Preset"
        display="flex"
        flex={1}
        padding={0}
        height="120px"
        borderRadius="md"
        backgroundRepeat="no-repeat"
        backgroundPosition="center center"
        backgroundSize="contain"
        background={background}
        backgroundImage={thumbnail}
        onClick={onSelected}
      />
    </Flex>
  );
};
export default EditorToolbarPresetItem;
