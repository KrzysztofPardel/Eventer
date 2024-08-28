import { Container, Text, Textarea, Input } from '@chakra-ui/react';

const Where = () => {
  return (
    <Container p='2rem'>
      <Text fontSize='2xl' fontWeight='200' textAlign='center' color='#00C7A3'>
        Step 3: Where
      </Text>
      <Container>
        <Container py='1rem'>
          <Text>Place Name</Text>
          <Input variant='myFlushed' />
        </Container>
        <Container py='1rem'>
          <Text paddingTop='1rem'>Description</Text>
          <Textarea variant='flushed'></Textarea>
        </Container>

        <Container py='1rem'>
          <Text>Link</Text>
          <Input variant='flushed' />
        </Container>

        <Container py='1rem'>
          <Text>Location Pin</Text>
          <Input variant='flushed' />
        </Container>

        <Container py='1rem' display='flex' alignItems='flex-end' gap='0.5rem'>
          <Text>Cost</Text>
          <Input type='number' variant='flushed' width='8rem' />
        </Container>
      </Container>
    </Container>
  );
};

export default Where;
