import { IoAdd } from 'react-icons/io5';
import { CiCircleInfo } from 'react-icons/ci';
import { PiSignInLight } from 'react-icons/pi';
import { GoSignIn } from 'react-icons/go';
import { GoPersonAdd } from 'react-icons/go';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { PiPersonSimpleRunLight } from 'react-icons/pi';

export const MOBILE_ITEMS = [
  {
    name: 'New Event',
    to: '/new',
    icon: <IoAdd />,
  },
  {
    name: 'Sign In',
    to: '/signin',
    icon: <PiSignInLight />,
  },
  {
    name: 'Sign Out',
    to: '/signout',
    icon: <GoSignIn />,
  },
  {
    name: 'Sign Up',
    to: '/signup',
    icon: <GoPersonAdd />,
  },
  {
    name: 'Dashboard',
    to: '/dashboard',
    icon: <MdOutlineSpaceDashboard />,
  },
  {
    name: 'About',
    to: '/about',
    icon: <CiCircleInfo />,
  },
  {
    name: 'Profile',
    to: '/profile',
    icon: <PiPersonSimpleRunLight />,
  },
];
