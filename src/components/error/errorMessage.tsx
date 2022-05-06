import React from 'react';
import Button from '@components/ui/button/button';
import { Text, Heading, Link, Container } from '@chakra-ui/react';

interface ErrorMessageProps {}

const ErrorMessage: React.FC<ErrorMessageProps> = ({}) => {
  return (
    <Container textAlign="center" py={10} px={6} borderRadius="xl" backgroundColor="backgroundSecondary">
      <Heading display="inline-block" as="h2" size="3xl">
        404
      </Heading>
      <Text fontSize="2xl" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text mb={6}>
        The page you're looking for does not seem to exist, if you think this is a mistake, please contact us.
      </Text>

      <Link href="/" rel="noopener noreferrer nofollow" _hover={{ textDecor: 'none' }}>
        <Button aria-label="Goto Home" colorScheme="brand" variant="solid" borderRadius="none">
          Go to Home
        </Button>
      </Link>
    </Container>
  );
};
export default ErrorMessage;
