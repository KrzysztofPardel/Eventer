import { Container, Text, Heading, Divider, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const nagivate = useNavigate();
  return (
    <Container display='flex' flexDirection='column' gap='2rem'>
      <Heading as='h1' size='3xl' fontWeight='100' textAlign='center' mb='-2rem'>
        Eventer
      </Heading>
      <Divider p='' />
      <Text as='h3' size='xs' textAlign='center' fontWeight='200' mt='-2rem'>
        Simple event planning in 7 steps
      </Text>
      <Container display='flex' flexDirection='column' alignItems='center' gap='1rem'>
        <Button variant='myVariant' width='15rem' onClick={() => nagivate('/about')}>
          What is Eventer?
        </Button>
        <Button variant='myVariant' width='15rem' onClick={() => nagivate('/signup')}>
          Sign Up
        </Button>
        <Button variant='myVariant' width='15rem' onClick={() => nagivate('/new')}>
          New Event
        </Button>
        <Button variant='myVariant' width='15rem' onClick={() => nagivate('/dashboard')}>
          Dashboard
        </Button>
      </Container>
      <Container>
        <Text as='h3' fontWeight='200' fontSize='1.2rem' textAlign='center' fontStyle='italic'>
          The most successful event is the one that achieves your goals and exceeds your
          expectations
        </Text>
      </Container>
    </Container>
  );
};

export default Hero;
