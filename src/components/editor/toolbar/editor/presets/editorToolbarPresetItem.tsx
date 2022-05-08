import React from 'react';
import Button from '@components/ui/button/button';
import { Flex } from '@chakra-ui/react';

interface EditorToolbarPresetItemProps {
  thumbnail: string;
  background: string;
  onSelected: () => void;
}

const EditorToolbarPresetItem: React.FC<EditorToolbarPresetItemProps> = (props) => {
  const { thumbnail, background, onSelected } = props;
  return (
    <Flex flex="0 0 125px" position="relative">
      <Button
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
