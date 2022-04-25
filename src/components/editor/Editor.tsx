import React, { createRef } from 'react';
import {
  Box,
  Container,
  Flex,
  HStack,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { EditorToolBar } from './toolbar/EditorToolBar';
import { parseBackgroundColor } from '@lib/HelperFunctions';
import {
  Color,
  selectBackgroundCustomization,
  selectCodeCustomization,
  selectWindowCustomization,
} from '@state/slices/toolbar/ToolbarEditorCustomization.slice';
import { useSelector } from 'react-redux';
import { EditorCodeContent } from './content/EditorCodeContent';
import SnapifyLogo from '@components/branding/SnapifyLogo';
import { EXAMPLE_CODE } from '@lib/Constants';

interface EditorProps {}

type ShadowEntry = {
  color: string;
  size: [number, number, number];
};

export const Editor: React.FC<EditorProps> = ({}) => {
  const savedRef = createRef<HTMLDivElement>();
  const backgroundCustomization = useSelector(selectBackgroundCustomization);
  const codeCustomization = useSelector(selectCodeCustomization);
  const windowCustomization = useSelector(selectWindowCustomization);

  const generateWindowShadow = (size: number): string => {
    const BASE_COLOR: Color = windowCustomization.shadow.boxShadowColor;
    const PARSED_COLOR: string = `rgba(${BASE_COLOR?.r}, ${BASE_COLOR?.g}, ${BASE_COLOR?.b}, ${BASE_COLOR?.a})`;
    const BASE: ShadowEntry[] = [
      {
        color: PARSED_COLOR,
        size: [0, 54, 55],
      },
      {
        color: PARSED_COLOR,
        size: [0, -12, 30],
      },
      {
        color: PARSED_COLOR,
        size: [0, 4, 6],
      },
      {
        color: PARSED_COLOR,
        size: [0, 12, 12],
      },
      {
        color: PARSED_COLOR,
        size: [0, -3, 5],
      },
    ];

    const shadow = BASE.map((entry) => {
      const [x, y, z] = entry.size;
      const multiplier = size / 1.5;
      return `${entry.color} ${x * multiplier}px ${y * multiplier}px ${
        z * multiplier
      }px`;
    });

    return shadow.join(', ');
  };

  return (
    <Container
      maxW={['0em', '30em', '48em', '62em', '80em', '90em']}
      padding={6}
      backgroundColor={useColorModeValue('gray.200', 'gray.900')}
      borderRadius='md'
    >
      {/* Editor Tool Bar */}
      <HStack width='100%' my={6} justifyContent='center'>
        <EditorToolBar exportRef={savedRef} />
      </HStack>
      {/* Export Container */}
      <Flex
        ref={savedRef}
        alignItems='center'
        justifyContent='center'
        overflow='hidden'
      >
        {/* Container */}
        <Box
          width='100%'
          backgroundColor={parseBackgroundColor(
            backgroundCustomization.backgroundColor
          )}
          paddingLeft={`${windowCustomization.paddingX * 3}px`}
          paddingRight={`${windowCustomization.paddingX * 3}px`}
          paddingTop={`${windowCustomization.paddingY * 3}px`}
          paddingBottom={`${windowCustomization.paddingY * 3}px`}
          backgroundRepeat='no-repeat'
          backgroundSize='cover'
          backgroundPosition='center'
          backgroundImage={`url(${backgroundCustomization.backgroundImage})`}
          backdropFilter={`${
            backgroundCustomization.backgroudBlur > 0
              ? `blur(${backgroundCustomization.backgroudBlur}px)`
              : 'none'
          }`}
        >
          {/* Editor Code Window */}
          <EditorCodeContent
            code={EXAMPLE_CODE}
            language={codeCustomization.codeLanguage}
            styles={{
              borderRadius: `${windowCustomization.borderRadius}px`,
              boxShadow:
                windowCustomization.shadow.boxShadow &&
                generateWindowShadow(windowCustomization.shadow.boxShadowSize),
            }}
          />
        </Box>
      </Flex>
    </Container>
  );
};
