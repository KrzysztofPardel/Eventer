import React from 'react';
import './Mobile.scss';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
} from '@chakra-ui/react';
// import { menuAnatomy } from '@chakra-ui/anatomy';
// import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';
// const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
//   menuAnatomy.keys,
// );
import { IoAdd } from 'react-icons/io5';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { RiMenuUnfold2Line } from 'react-icons/ri';
import { BsPerson } from 'react-icons/bs';

const styles = {
  mobile_container: 'w-full hidden lg:hidden',
  mobile_button: 'w-1/3 h-1/3',
};

const Mobile = () => {
  return (
    <div className={styles.mobile_container}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<RiMenuUnfold2Line />}
          variant='outline'
          className={styles.mobile_button}
          // isLazy={true}
        />
        <MenuList>
          <MenuItem icon={<IoAdd />} command='⌘T'>
            New Event
          </MenuItem>
          <MenuItem icon={<MdOutlineSpaceDashboard />} command='⌘D'>
            Dashboard
          </MenuItem>
          <MenuItem icon={<BsPerson />} command='⌘⇧P'>
            Profile
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Mobile;
