import { Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { RiMenuUnfold2Line } from 'react-icons/ri';
import { MOBILE_ITEMS } from './Data';

const Mobile = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<RiMenuUnfold2Line />}
          variant='outline'
        />
        <MenuList>
          {MOBILE_ITEMS.map(({ name, to, icon }) => {
            return (
              <MenuItem key={name} onClick={() => navigate(`${to}`)} icon={icon}>
                {name}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </div>
  );
};

export default Mobile;
