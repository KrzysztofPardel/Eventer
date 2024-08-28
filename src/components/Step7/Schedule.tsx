import {
  Container,
  Text,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from '@chakra-ui/react';
import { SCHEDULE_LIST, LIST_TR } from './Data';

const Schedule = () => {
  return (
    <Container p='2rem'>
      <Text fontSize='2xl' fontWeight='200' textAlign='center' color='#00C7A3'>
        Step 7: Schedule
      </Text>
      <Container>
        <Box p='0rem' py='1rem'>
          <Text>
            The event will last for <Input variant='flushed' width='10em' />
            hours, from
            <Input w='4rem' variant='flushed' /> to
            <Input w='3rem' variant='flushed' />
          </Text>
        </Box>
        <Container py='1rem' display='flex' alignItems='flex-end' gap='0.5rem'>
          <Text>Cost</Text>
          <Input type='number' variant='flushed' width='8rem' />
        </Container>
      </Container>
      <Container>
        <Text fontWeight='500' fontSize='xl' textAlign='center' borderBottom='0.5px solid'>
          Schedule
        </Text>
        <TableContainer>
          <Table variant='simple'>
            <TableCaption>My Schedule</TableCaption>
            <Thead>
              <Tr>
                {LIST_TR.map((el) => {
                  return <Td key={el}>{el}</Td>;
                })}
              </Tr>
            </Thead>
            <Tbody>
              {SCHEDULE_LIST.map(({ nr, time, activity, comment }) => {
                return (
                  <Tr key={nr}>
                    <Td>{nr}</Td>
                    <Td>{time}</Td>
                    <Td>{activity}</Td>
                    <Td>{comment}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
    </Container>
  );
};

export default Schedule;
