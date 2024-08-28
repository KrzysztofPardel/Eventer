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

import { FOOD_LIST, LIST_TR } from './Data';

const Food = () => {
  return (
    <Container p='2rem'>
      <Text fontSize='2xl' fontWeight='200' textAlign='center' color='#00C7A3'>
        Step 5: Food
      </Text>
      <Container>
        <Container py='1rem'>
          <Text>Person in charge</Text>
          <Input variant='flushed' />
        </Container>
        <Container py='1rem' display='flex' alignItems='flex-end' gap='0.5rem'>
          <Text>Cost</Text>
          <Input type='number' variant='flushed' width='8rem' />
        </Container>
      </Container>
      <Container>
        <Text fontWeight='500' fontSize='xl' textAlign='center' borderBottom='0.5px solid'>
          Food list
        </Text>
        <TableContainer>
          <Table variant='simple'>
            <TableCaption>All my products</TableCaption>
            <Thead>
              <Tr>
                {LIST_TR.map((el) => {
                  return <Td key={el}>{el}</Td>;
                })}
              </Tr>
            </Thead>
            <Tbody>
              {FOOD_LIST.map(({ number, name, bought, comment }) => {
                return (
                  <Tr key={number}>
                    <Td>{number}</Td>
                    <Td>{name}</Td>
                    <Td>{bought}</Td>
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

export default Food;
