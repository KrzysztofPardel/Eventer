import {
  Container,
  Text,
  Center,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from '@chakra-ui/react';
import { GUEST_LIST, LIST_TR } from '../Step4/Data';
import { FOOD_LIST, LIST_TR as LIST_TR_FOOD } from '../Step5/Data';
import { SCHEDULE_LIST, LIST_TR as LIST_TR_SCHEDULE } from '../Step7/Data';
import { PiFilePdfFill } from 'react-icons/pi';
import { SiJpeg } from 'react-icons/si';

const Summary = () => {
  return (
    <Container>
      <Text fontSize='2xl' fontWeight='200' textAlign='center' color='#00C7A3'>
        Summary
      </Text>
      {/* Step 1 - What */}
      <Container p=''>
        <Text fontSize='xl' fontWeight='600' color='#00C7A3'>
          What
        </Text>
        <Container p='0' py='1rem'>
          <Container p='0' my='1rem'>
            <Text fontSize='xs' pb='0.5rem'>
              Event title
            </Text>
            <Text fontSize='l' fontWeight='600'>
              Grandpa's Birthday
            </Text>
          </Container>
          <Container p='0' my='1rem'>
            <Text fontSize='xs' pb='0.5rem'>
              Category
            </Text>
            <Text fontSize='l' fontWeight='600'>
              Family
            </Text>
          </Container>
        </Container>
      </Container>
      {/* Step 2 - When */}
      <Container>
        <Text fontSize='xl' fontWeight='600' color='#00C7A3'>
          When
        </Text>
        <Container p='0' py='1rem'>
          <Container p='0' my='1rem' display='flex' gap='0.5rem' fontWeight='600'>
            <Text fontSize='xs' pb='0.5rem'>
              One day
            </Text>
            <Center height='1rem'>
              <Divider orientation='vertical' />
            </Center>
            <Text fontSize='xs' color='D9D9D9'>
              Longer
            </Text>
          </Container>
          {/* Date */}
          <Container display='flex'>
            <Container p='0' my='1rem'>
              <Text fontSize='xs' pb='0.5rem'>
                Start Date
              </Text>
              <Text fontSize='l' fontWeight='600'>
                15.09.2024
              </Text>
            </Container>
            <Container p='0' my='1rem'>
              <Text fontSize='xs' pb='0.5rem'>
                End Date
              </Text>
              <Text fontSize='l' fontWeight='600'>
                17.09.2024
              </Text>
            </Container>
          </Container>
          {/* Time */}
          <Container display='flex'>
            <Container p='0' my='1rem'>
              <Text fontSize='xs' pb='0.5rem'>
                Start Time
              </Text>
              <Text fontSize='l' fontWeight='600'>
                15.00
              </Text>
            </Container>
            <Container p='0' my='1rem'>
              <Text fontSize='xs' pb='0.5rem'>
                End Time
              </Text>
              <Text fontSize='l' fontWeight='600'>
                17.00
              </Text>
            </Container>
          </Container>
        </Container>
      </Container>
      {/* Step 3 - Where */}
      <Container>
        <Text fontSize='xl' fontWeight='600' color='#00C7A3'>
          Where
        </Text>
        <Container p='0' py='1rem'>
          <Container p='0' my='1rem'>
            <Text fontSize='xs' pb='0.5rem'>
              Place Name
            </Text>
            <Text fontSize='l' fontWeight='600'>
              Grandpa's house
            </Text>
          </Container>
          <Container p='0' my='1rem'>
            <Text fontSize='xs' pb='0.5rem'>
              Description
            </Text>
            <Text fontSize='l' fontWeight='600'>
              Celebrating Grandpa’s birthdays along with some extended family on a Saturday
              afternoon.
            </Text>
          </Container>
          <Container p='0' my='1rem'>
            <Text fontSize='xs' pb='0.5rem'>
              Link
            </Text>
            <Text fontSize='l' fontWeight='600'>
              none
            </Text>
          </Container>
          <Container p='0' my='1rem'>
            <Text fontSize='xs' pb='0.5rem'>
              Pin
            </Text>
            <Text fontSize='l' fontWeight='600'>
              https://maps.app.goo.gl/RaPGg6AB4ncBcQFE7
            </Text>
          </Container>
        </Container>
      </Container>
      {/* Step 4 - Guests */}
      <Container>
        <Text fontSize='xl' fontWeight='600' color='#00C7A3'>
          Guests
        </Text>
        <Container p='0' py='1rem'>
          <Container display='flex'>
            <Container p='0' my='1rem'>
              <Text fontSize='xs' pb='0.5rem'>
                Estimated
              </Text>
              <Text fontSize='l' fontWeight='600'>
                20
              </Text>
            </Container>
            <Container p='0' my='1rem'>
              <Text fontSize='xs' pb='0.5rem'>
                Exact
              </Text>
              <Text fontSize='l' fontWeight='600'>
                17
              </Text>
            </Container>
          </Container>
          <Text fontSize='l' fontWeight='600' textAlign='center'>
            Guests list
          </Text>
        </Container>
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
      {/* Step 5 - Food */}
      <Container>
        <Text fontSize='xl' fontWeight='600' color='#00C7A3'>
          Food
        </Text>
        <Container p='0' my='1rem' display='flex' gap='0.5rem' fontWeight='600'>
          <Text fontSize='xs' pb='0.5rem'>
            Some
          </Text>
          <Center height='1rem'>
            <Divider orientation='vertical' />
          </Center>
          <Text fontSize='xs' color='D9D9D9'>
            None
          </Text>
        </Container>
        <Text fontSize='l' fontWeight='600' textAlign='center'>
          Product list
        </Text>
        <TableContainer>
          <Table variant='simple'>
            <TableCaption>All my products</TableCaption>
            <Thead>
              <Tr>
                {LIST_TR_FOOD.map((el) => {
                  return <Td key={el}>{el}</Td>;
                })}
              </Tr>
            </Thead>
            <Tbody>
              {FOOD_LIST.map(({ number, name, amount, bought, comment }) => {
                return (
                  <Tr key={number}>
                    <Td>{number}</Td>
                    <Td>{name}</Td>
                    <Td>{amount}</Td>
                    <Td>{bought}</Td>
                    <Td>{comment}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Container>
      {/* Step 6 - Budget */}
      <Container>
        <Text fontSize='xl' fontWeight='600' color='#00C7A3'>
          Budget
        </Text>
        <Container p='0' py='1rem'>
          <Container p='0' my='1rem'>
            <Text fontSize='xs' pb='0.5rem'>
              Person in charge
            </Text>
            <Text fontSize='l' fontWeight='600'>
              Mark G
            </Text>
          </Container>
          <Container display='flex'>
            <Container p='0' my='1rem'>
              <Text fontSize='xs' pb='0.5rem'>
                Estimated
              </Text>
              <Text fontSize='l' fontWeight='600'>
                $ 400
              </Text>
            </Container>
            <Container p='0' my='1rem'>
              <Text fontSize='xs' pb='0.5rem'>
                Additional
              </Text>
              <Text fontSize='l' fontWeight='600'>
                $ 20
              </Text>
            </Container>
            <Container p='0' my='1rem'>
              <Text fontSize='xs' pb='0.5rem'>
                Summary
              </Text>
              <Text fontSize='l' fontWeight='600'>
                $ 420
              </Text>
            </Container>
          </Container>
          <Container p='0' my='1rem' display='flex' gap='0.5rem' fontWeight='600'>
            <Text fontSize='xs' pb='0.5rem'>
              Divide the costs by:
            </Text>
            <Text fontSize='xs' pb='0.5rem'>
              Participants
            </Text>
            <Center height='1rem'>
              <Divider orientation='vertical' />
            </Center>
            <Text fontSize='xs' pb='0.5rem'>
              Number
            </Text>
            <Center height='1rem'>
              <Divider orientation='vertical' />
            </Center>
            <Text fontSize='xs' color='D9D9D9'>
              None
            </Text>
          </Container>
          <Container
            h='2rem'
            p='0'
            my='1rem'
            display='flex'
            alignItems='center'
            justifyContent='center'
            gap='1rem'
          >
            <Text fontSize='xs'>Result:</Text>
            <Text fontSize='s' fontWeight='600'>
              $ 24.7
            </Text>
            <Text fontSize='xs'>per person</Text>
          </Container>
        </Container>
      </Container>
      {/* Step 7 - Schedule */}
      <Container>
        <Text fontSize='xl' fontWeight='600' color='#00C7A3'>
          Schedule
        </Text>
        <Container h='2rem' p='0' my='1rem' display='flex' alignItems='center' gap='1rem'>
          <Text fontSize='xs'>Event will last for</Text>
          <Text fontSize='s' fontWeight='600'>
            5
          </Text>
          <Text fontSize='xs'>hours, from</Text>
          <Text fontSize='s' fontWeight='600'>
            15.00
          </Text>
          <Text fontSize='xs'>to</Text>
          <Text fontSize='s' fontWeight='600'>
            20.00
          </Text>
        </Container>
        <TableContainer>
          <Table variant='simple'>
            <TableCaption>All my products</TableCaption>
            <Thead>
              <Tr>
                {LIST_TR_SCHEDULE.map((el) => {
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
        <Container display='flex' flexDirection='column' alignItems='center' gap='1rem' my='1.5rem'>
          <Button variant='myVariant'>Save Event</Button>
          <Text fontSize='xs' p='0.5rem' fontWeight='600'>
            Share Summary
          </Text>
          <Container display='flex' justifyContent='center' mb='4rem'>
            <Button variant='myVariant' fontSize='2rem' p='1rem' mr='1rem'>
              <SiJpeg />
            </Button>
            <Button variant='myVariant' fontSize='2rem'>
              <PiFilePdfFill />
            </Button>
          </Container>
          <Button variant='myVariant' width='15rem'>
            New Event
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default Summary;
