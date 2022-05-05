import React, { useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';
import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';
import { setBackgroundCustomization } from '@state/slices/editor/editorCustomization.slice';
import { useDispatch } from 'react-redux';

interface EditorToolbarBackgroundImageProps {}

const EditorToolbarBackgroundImage: React.FC<EditorToolbarBackgroundImageProps> = ({}) => {
  const [imageFiles, setImageFiles] = useState<any[]>([]);
  const dispatch = useDispatch();

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
    <Box py={2} width="full">
      <VStack display="flex" spacing={4}>
        {/* Header */}
        <Text as="h2" fontWeight={600} fontSize="lg" mb={4}>
          Upload an Image.
        </Text>
        {/* Image pick */}
        <Dropzone
          onDrop={(acceptedFiles) => {
            setImageFiles(
              acceptedFiles.map((file) => {
                // Create blob from file.
                const blob = new Blob([file], { type: file.type });
                return URL.createObjectURL(blob);
              })
            );
          }}
        >
          {({ getRootProps, getInputProps, open }) => (
            <Box {...getRootProps()}>
              <input {...getInputProps()} />
              <HStack width="100%" justifyContent="space-between">
                <Button colorScheme="blue" onClick={open}>
                  Open File Dialog
                </Button>
              </HStack>
            </Box>
          )}
        </Dropzone>
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
      </VStack>
    </Box>
  );
};
export default EditorToolbarBackgroundImage;
