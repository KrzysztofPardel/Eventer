import { Text, Heading, Divider } from '@chakra-ui/react';

const Headings = () => {
  return (
    <>
      <Heading as='h1' size='3xl' fontWeight='100' textAlign='center'>
        Dashboard
      </Heading>
      <Divider p='' />
      <Text as='h3' size='xs' textAlign='center' fontWeight='200'>
        Simple event planning in 7 steps
      </Text>
      <Heading color='#00C7A3' size='xl' fontWeight='100' textAlign='center' my='1rem'>
        Your events
      </Heading>
    </>
  );
};

export default Headings;
