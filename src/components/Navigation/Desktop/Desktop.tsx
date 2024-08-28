import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Heading,
  HStack,
  Link,
} from '@chakra-ui/react';
import { FaAngleDown } from 'react-icons/fa6';

const MENU_ITEMS = [
  { name: 'About', to: '' },
  { name: 'Sign In', to: '' },
  { name: 'Sign Up', to: '' },
  { name: 'Profile', to: '' },
  { name: 'Dashboard', to: '' },
];

const Desktop = () => {
  return (
    <HStack p={4}>
      <Heading as='h1' color={'pink'}>
        This is a desktop nav
      </Heading>
      <Menu>
        <MenuButton
          px={4}
          py={2}
          transition='all 0.2s'
          borderRadius='md'
          borderWidth='1px'
          _hover={{ bg: 'gray.400' }}
          _expanded={{ bg: 'blue.400' }}
          _focus={{ boxShadow: 'outline' }}
        >
          Profile <FaAngleDown />
        </MenuButton>
        <MenuList>
          {MENU_ITEMS.map(({ name, to }) => {
            return (
              <Link key={name} href={to}>
                {name}
              </Link>
            );
          })}
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          px={4}
          py={2}
          transition='all 0.2s'
          borderRadius='md'
          borderWidth='1px'
          _hover={{ bg: 'gray.400' }}
          _expanded={{ bg: 'blue.400' }}
          _focus={{ boxShadow: 'outline' }}
        >
          About <FaAngleDown />
        </MenuButton>
        <MenuList>
          <MenuItem>Eventer</MenuItem>
          <MenuItem>How to use it?</MenuItem>
          <MenuDivider />
          <MenuItem>FAQ</MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default Desktop;
