import React, { useEffect, useState } from 'react';
import { Box, Text, Flex, Button } from '@chakra-ui/react';
import { setBackgroundCustomization } from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { useDropzone } from 'react-dropzone';
import { useDispatch } from 'react-redux';

interface EditorBackgroundImageProps {}

export const EditorBackgroundImage: React.FC<
  EditorBackgroundImageProps
> = ({}) => {
  const [imageFiles, setImageFiles] = useState<any[]>([]);
  const dispatch = useDispatch();
  const { acceptedFiles, getRootProps, open, getInputProps } = useDropzone({
    accept: 'image/*',
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      setImageFiles(
        acceptedFiles.map((file) => {
          // Create blob from file.
          const blob = new Blob([file], { type: file.type });
          return URL.createObjectURL(blob);
        })
      );
    },
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    imageFiles.forEach((file) => URL.revokeObjectURL(file.preview));
    if (imageFiles.length > 0) {
      dispatch(
        setBackgroundCustomization({
          backgroundImage: imageFiles[0],
        })
      );
    }
  }, [imageFiles]);
  return (
    <Flex
      flexDir='column'
      pb={2}
      width='full'
      justifyContent='center'
      alignContent='center'
    >
      <Text as='h2' fontWeight={600} fontSize='lg' mb={4}>
        Upload an Image.
      </Text>
      <Box {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <Button colorScheme='blue' onClick={open}>
          Open File Dialog
        </Button>
      </Box>
    </Flex>
  );
};
