import { Container, Text, Heading, Divider } from '@chakra-ui/react';

const About = () => {
  return (
    <Container display='flex' flexDirection='column' gap='2rem'>
      <Heading as='h1' size='xl' fontWeight='100' textAlign='center' mb='-2rem'>
        Welcome to
      </Heading>
      <Heading color='#00C7A3' as='h1' size='3xl' fontWeight='100' textAlign='center' mb='-2rem'>
        Eventer
      </Heading>
      <Divider />
      <Text as='h3' size='xs' textAlign='center' fontWeight='200' mt='-2rem'>
        Simple event planning in 7 steps
      </Text>
      <Text as='h3' fontSize='1.2rem' fontWeight='200'>
        For most of the events and hangouts you run, you don’t need a robust app, just a simple form
        which will help you keep things clean and clear. This is why we created Eventer. Go through
        8 simple steps and plan you next family reunion or a meeting with friends in a restaurant.
        Everything in 7 simple steps:
      </Text>
      <Container fontSize='1.5rem' fontWeight='300'>
        <Text>1. What</Text>
        <Text>2. When</Text>
        <Text>3. Where</Text>
        <Text>4. Guests</Text>
        <Text>5. Food</Text>
        <Text>6. Budget</Text>
        <Text>7. Schedule</Text>
      </Container>
      <Text as='h3' size='xs' fontWeight='200' fontSize='1.2rem'>
        At the end print your summary to PDF and share with all involved.
      </Text>
      <Text as='h3' size='xs' fontWeight='200' fontSize='1.2rem'>
        Simple, isn't it?
      </Text>
    </Container>
  );
};

export default About;
