import { Container, Text, Input } from '@chakra-ui/react';

const When = () => {
  return (
    <Container p='2rem'>
      <Text fontSize='2xl' fontWeight='200' textAlign='center' color='#00C7A3'>
        Step 2: When
      </Text>

      <Container display='flex' gap='1rem'>
        <Container p='0'>
          <Text>Date</Text>
          <Input variant='flushed' />
        </Container>
        <Container p='0'>
          <Text>Time</Text>
          <Input type='time' variant='flushed' />
          <Text mt='1rem'>Time</Text>
          <Input type='time' variant='flushed' />
        </Container>
      </Container>
    </Container>
  );
};

export default When;
