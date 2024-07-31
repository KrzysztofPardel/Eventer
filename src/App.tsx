import { useRoutes } from 'react-router-dom';
import Home from './Home/Home';
import './SCSS/main.scss';
import './index.css';

function App() {
  let element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
  ]);
  return element;
}

export default App;
