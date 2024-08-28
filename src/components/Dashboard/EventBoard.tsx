import { Container, Text, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const EVENT_CARDS = [
  { id: 1, name: 'Christmas Party', date: '23.12' },
  { id: 2, name: `Letty's arrival`, date: '10.10.24' },
  { id: 3, name: `Uncle Dan's Welcome`, date: '18.09.24' },
  { id: 4, name: `Diana's promotion`, date: '15.09.24' },
  { id: 5, name: `Bratt's Birthday`, date: '23.08.24' },
  { id: 6, name: `Kate's babyshower`, date: '15.08.24' },
];
const ARCHIVED_CARDS = [
  { id: 1, name: 'Summer Party', date: '23.06' },
  { id: 2, name: `Ben's arrival`, date: '10.10.24' },
  { id: 3, name: `Summer Camp Welcome`, date: '18.09.24' },
  { id: 4, name: `Mom's birthday`, date: '15.09.24' },
  { id: 5, name: ``, date: '23.08.24' },
  { id: 6, name: `Kate's babyshower`, date: '15.08.24' },
];

const EventBoard = () => {
  const [showEvents, setShowEvents] = useState<boolean>(true);
  const [showArchived, setShowArchived] = useState<boolean>(false);

  return (
    <Container>
      <Container>
        <Button
          gap='0.5rem'
          border='none'
          color='black'
          fontWeight='400'
          onClick={() => setShowEvents(!showEvents)}
        >
          Coming up
          {showEvents ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </Button>
        <Container
          display={showEvents ? 'flex' : 'none'}
          flexWrap='wrap'
          justifyContent='space-between'
        >
          {EVENT_CARDS.map(({ id, name, date }) => {
            return (
              <Container
                key={id}
                display='flex'
                flexDirection='column'
                justifyContent='space-between'
                m='0.5rem'
                background='#00C7A3'
                w='7rem'
                height='7rem'
                p='0.5rem'
                borderRadius='10px'
              >
                <Text fontWeight='500'>{name}</Text>
                <Text>{date}</Text>
              </Container>
            );
          })}
        </Container>
      </Container>
      <Container>
        <Button
          gap='0.5rem'
          border='none'
          color='black'
          fontWeight='400'
          onClick={() => setShowArchived(!showArchived)}
        >
          Archived
          {showArchived ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </Button>
        <Container
          display={showArchived ? 'flex' : 'none'}
          justifyContent='space-between'
          flexWrap='wrap'
        >
          {ARCHIVED_CARDS.map(({ id, name, date }) => {
            return (
              <Container
                key={id}
                display='flex'
                flexDirection='column'
                justifyContent='space-between'
                m='0.5rem'
                background='#D5D5D5'
                w='7rem'
                height='7rem'
                p='0.5rem'
                borderRadius='10px'
              >
                <Text fontWeight='500'>{name}</Text>
                <Text>{date}</Text>
              </Container>
            );
          })}
        </Container>
      </Container>
    </Container>
  );
};

export default EventBoard;
