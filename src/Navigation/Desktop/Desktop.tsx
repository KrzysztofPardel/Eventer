import './Desktop.scss';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Heading,
  HStack,
} from '@chakra-ui/react';
import { FaAngleDown } from 'react-icons/fa6';

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
          <MenuItem>Log In</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuDivider />
          <MenuItem>Dashboard</MenuItem>
          <MenuItem>Edit</MenuItem>
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
