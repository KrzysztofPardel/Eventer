import { Container, Text, Heading, Input, Divider, Button } from '@chakra-ui/react';

const SignIn = () => {
  return (
    <Container>
      <Heading as='h1' size='3xl' fontWeight='100' textAlign='center'>
        Sign In
      </Heading>
      <Divider p='' />
      <Text as='h3' size='xs' textAlign='center' fontWeight='200'>
        Simple event planning in 7 steps
      </Text>
      <Container p='0' py='1rem'>
        <Container p='0' my='1rem'>
          <Text>email</Text>
          <Input variant='myFlushed' />
          <Text fontSize='xs' color='red' py='0.5rem'>
            this is an error message
          </Text>
        </Container>
        <Container p='0' my='1rem'>
          <Text>password</Text>
          <Input variant='myFlushed' />
          <Text fontSize='xs' color='red' py='0.5rem'>
            this is an error message
          </Text>
        </Container>
      </Container>
      <Container
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        gap='2rem'
        my='1.5rem'
      >
        <Button background='#D9D9D9' color='black' fontWeight='300' textTransform='none' w='10rem'>
          Sign In
        </Button>
        <Button
          border='1px solid black'
          color='black'
          fontWeight='300'
          textTransform='none'
          w='10rem'
          _hover={{ background: '#D9D9D9' }}
        >
          Cancel
        </Button>
      </Container>
    </Container>
  );
};

export default SignIn;
