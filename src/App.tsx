import { useRoutes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import Home from './pages/Home/Home';
import Form from './pages/Form/Form';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import SignOut from './components/Auth/SignOut';
import About from './components/Home/About';
import DashboardMessage from './components/Dashboard/DashboardMessage';
import { supabase } from '../src/supabaseClient';

function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    //function to fetch the initial session
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
    };
    //call the function to set the initial session state
    fetchSession();

    //set up the listener for session changes
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      authListener?.subscription.unsubscribe;
    };
  }, []);

  let element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
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
      element: session ? <Dashboard /> : <DashboardMessage />,
    },
  ]);
  return element;
}

export default App;
