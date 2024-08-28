import { useRoutes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Form from './pages/Form/Form';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import SignOut from './components/Auth/SignOut';

function App() {
  let element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/new',
      element: <Form />,
    },
    {
      path: '/signin',
      element: <SignIn />,
    },
    {
      path: '/signup',
      element: <SignUp />,
    },
    {
      path: '/signout',
      element: <SignOut />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
  ]);
  return element;
}

export default App;
