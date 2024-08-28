import Mobile from './Mobile/Mobile';
import Desktop from './Desktop/Desktop';
import { Hide } from '@chakra-ui/react';
import { Container } from '@chakra-ui/react';

const Navigation = () => {
  return (
    <Container display='flex' justifyContent='flex-end' p='1rem' bg='#D9D9D9'>
      <Hide below='md'>
        <Desktop />
      </Hide>
      <Hide above='md'>
        <Mobile />
      </Hide>
    </Container>
  );
};

export default Navigation;
