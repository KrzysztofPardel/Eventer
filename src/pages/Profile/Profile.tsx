import { Container, Text, Input } from '@chakra-ui/react';

const Profile = () => {
  return (
    <Container>
      <Text>Event title:</Text>
      <Input variant='myFlushed' />
      <Text paddingTop='1rem'>Category</Text>
    </Container>
  );
};

export default Profile;
