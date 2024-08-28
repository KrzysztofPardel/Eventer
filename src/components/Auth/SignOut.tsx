import { Container, Text, Heading, Divider, Button } from '@chakra-ui/react';

const SignOut = () => {
  return (
    <Container h='80vh'>
      <Heading as='h1' size='3xl' fontWeight='100' textAlign='center'>
        Sign Out
      </Heading>
      <Divider p='' />
      <Text as='h3' size='xs' textAlign='center' fontWeight='200'>
        Simple event planning in 7 steps
      </Text>
      <Container
        display='flex'
        flexDirection='column'
        gap='1rem'
        justifyContent='center'
        alignItems='center'
        borderRadius='5px'
        h='100%'
      >
        <Text>You have been signed out</Text>
        <Button background='#D9D9D9' color='black' fontWeight='300' textTransform='none' w='10rem'>
          ok
        </Button>
      </Container>
    </Container>
  );
};

export default SignOut;
