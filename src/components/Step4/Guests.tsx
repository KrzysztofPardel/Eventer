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
} from '@chakra-ui/react';
import { GUEST_LIST, LIST_TR } from './Data';

const Guests = () => {
  return (
    <Container p='2rem'>
      <Text fontSize='2xl' fontWeight='200' textAlign='center' color='#00C7A3'>
        Step 4: Guests
      </Text>
      <Container>
        <Container p='0'>
          <Container
            py='1rem'
            display='flex'
            alignItems='flex-end'
            gap='1rem'
            justifyContent='space-between'
          >
            <Text>Estimated</Text>
            <Input variant='flushed' width='8rem' />
          </Container>
          <Container
            py='1rem'
            display='flex'
            alignItems='flex-end'
            gap='1rem'
            justifyContent='space-between'
          >
            <Text>Exact</Text>
            <Input variant='flushed' width='8rem' />
          </Container>
        </Container>

        <Container py='1rem' display='flex' alignItems='flex-end' gap='0.5rem'>
          <Text>Cost</Text>
          <Input type='number' variant='flushed' width='8rem' />
        </Container>
      </Container>
      <Container>
        <Text fontWeight='500' fontSize='xl' textAlign='center' borderBottom='0.5px solid'>
          Guest list
        </Text>
        <TableContainer>
          <Table variant='simple'>
            <TableCaption>All my guests</TableCaption>
            <Thead>
              <Tr>
                {LIST_TR.map((el) => {
                  return <Td key={el}>{el}</Td>;
                })}
              </Tr>
            </Thead>
            <Tbody>
              {GUEST_LIST.map(({ number, name, role, confirmed, comment }) => {
                return (
                  <Tr key={number}>
                    <Td>{number}</Td>
                    <Td>{name}</Td>
                    <Td>{role}</Td>
                    <Td>{confirmed}</Td>
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

export default Guests;
