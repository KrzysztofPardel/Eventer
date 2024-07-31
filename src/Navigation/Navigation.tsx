import Mobile from './Mobile/Mobile';
import Desktop from './Desktop/Desktop';
import { Button, Hide } from '@chakra-ui/react';

const Navigation = () => {
  return (
    <>
      <Button variant='myVarinat' disabled={true}>
        Test
      </Button>
      <Hide below='md'>
        <Desktop />
      </Hide>
      <Hide above='md'>
        <Mobile />
      </Hide>
    </>
  );
};

export default Navigation;
