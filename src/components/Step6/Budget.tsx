import { Container, Text, Checkbox, Input } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { checkboxTheme } from '../../theme/components/checkbox';

export const theme = extendTheme({
  components: { Checkbox: checkboxTheme },
});

const Budget = () => {
  return (
    <Container p='2rem'>
      <Text fontSize='2xl' fontWeight='200' textAlign='center' color='#00C7A3'>
        Step 6: Budget
      </Text>
      <Container>
        <Container py='1rem'>
          <Text>Person in Charge</Text>
          <Input variant='flushed' />
        </Container>
        <Container py='1rem'>
          <Text>Estimated</Text>
          <Input variant='flushed' />
        </Container>
        <Container py='1rem'>
          <Text>Additional costs</Text>
          <Input variant='flushed' />
        </Container>
        <Container py='1rem'>
          <Text>Summary</Text>
          <Input variant='flushed' />
        </Container>

        <Container display='flex' flexDirection='column'>
          <Text>Divide the costs by:</Text>
          <Checkbox size='md' p='0' colorScheme='blue' variant='circular'>
            Participants
          </Checkbox>
          <Checkbox size='md' p='0' colorScheme='blue' variant='baseStyle'>
            Don't divide
          </Checkbox>
          <Container display='flex' alignItems='flex-end' p='0' gap='0.5rem'>
            <Checkbox size='md' p='0' colorScheme='blue' variant='circular' />
            <Text mr='0.5rem'>Number</Text>
            <Input variant='flushed' />
          </Container>
        </Container>
        <Container display='flex' justifyContent='center' alignItems='center' gap='1rem' pt='3rem'>
          <Text>Result</Text>
          <Text>738 zł</Text>
        </Container>
      </Container>
    </Container>
  );
};

export default Budget;
