import React, { useEffect, useState } from 'react';
import { Box, Text, Flex, Button, HStack, IconButton } from '@chakra-ui/react';

import { useDropzone } from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import { MdDeleteOutline } from 'react-icons/md';
import {
  selectBackgroundCustomization,
  setBackgroundCustomization,
} from '@state/slices/editor/editorCustomization.slice';

interface EditorToolbarBackgroundImageProps {}

const EditorToolbarBackgroundImage: React.FC<EditorToolbarBackgroundImageProps> = ({}) => {
  const [imageFiles, setImageFiles] = useState<any[]>([]);
  const dispatch = useDispatch();
  const backgroundCustomization = useSelector(selectBackgroundCustomization);
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
    <Flex flexDir="column" py={2} width="full" justifyContent="center" alignContent="center">
      {/* Header */}
      <Text as="h2" fontWeight={600} fontSize="lg" mb={4}>
        Upload an Image.
      </Text>
      {/* Image pick */}
      <Box {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <HStack width="100%" justifyContent="space-between">
          <Button colorScheme="blue" onClick={open}>
            Open File Dialog
          </Button>
          {imageFiles && imageFiles.length > 0 && (
            <IconButton
              icon={<MdDeleteOutline />}
              colorScheme="red"
              aria-label={''}
              onClick={() => {
                setImageFiles([]);
                dispatch(
                  setBackgroundCustomization({
                    backgroundImage: null,
                  })
                );
              }}
            />
          )}
        </HStack>
      </Box>
      {/* Background blur */}
      {/* <CustomizationSlider
        label='Background Blur'
        range={[0, 20]}
        valueType='px'
        defaultValue={backgroundCustomization.backgroudBlur}
        onUpdated={(value) =>
          dispatch(setBackgroundCustomization({ backgroudBlur: value }))
        }
      /> */}
    </Flex>
  );
};
export default EditorToolbarBackgroundImage;
