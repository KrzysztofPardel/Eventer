import { Container } from '@chakra-ui/react';
import EventBoard from '../../components/Dashboard/EventBoard';
import Headings from '../../components/Dashboard/Headings';

const Dashboard = () => {
  return (
    <Container>
      <Headings />
      <EventBoard />
    </Container>
  );
};

export default Dashboard;
