import { Container, Text, Input, Select } from '@chakra-ui/react';


const What = () => {
  return (
    <Container p='2rem'>
      <Text fontSize={{base: '2xl', lg: '4xl'}} fontWeight='200' textAlign='center' color='#00C7A3'>
        Step 1: What
      </Text>
      <Container>
        <Text>Event title:</Text>
        <Input variant='myFlushed' />
        <Text paddingTop='1rem'>Category</Text>
        <Select variant='flushed'>
          <option value='option1'>Family</option>
          <option value='option2'>Friends</option>
          <option value='option3'>Work</option>
          <option value='option3'>Charity</option>
          <option value='option3'>Church</option>
        </Select>
      </Container>
    </Container>
  );
};

export default What;
