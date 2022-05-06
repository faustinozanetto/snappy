import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Button, HStack, Text, useToast, VStack } from '@chakra-ui/react';
import { setBackgroundCustomization } from '@state/slices/editor/editorCustomization.slice';
import { useDispatch } from 'react-redux';

interface EditorToolbarBackgroundImageProps {}

const EditorToolbarBackgroundImage: React.FC<EditorToolbarBackgroundImageProps> = ({}) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [imageFiles, setImageFiles] = useState<any[]>([]);
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: { 'image/*': ['.png', '.gif', '.jpeg', '.jpg'] },
    onDropAccepted: (files) => {
      setImageFiles(
        files.map((file) => {
          // Create blob from file.
          const blob = new Blob([file], { type: file.type });
          return URL.createObjectURL(blob);
        })
      );
    },
    onError: (err) => {
      toast({
        title: 'Error',
        description: err.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
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
    <VStack display="flex" spacing={4}>
      {/* Heading */}
      <Text as="h2" fontSize="lg" fontWeight={600}>
        Image Editor
      </Text>
      {/* Image pick */}
      <Box {...getRootProps()} onClick={(e) => e.stopPropagation()}>
        <input {...getInputProps()} />
        <HStack width="100%" justifyContent="space-between">
          <Button onClick={open}>Select File</Button>
        </HStack>
      </Box>
    </VStack>
  );
};
export default EditorToolbarBackgroundImage;
