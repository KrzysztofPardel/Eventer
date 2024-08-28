import { extendTheme } from '@chakra-ui/react';
import { Button } from './components/button';
import { inputTheme } from './components/input';
import { checkboxTheme } from './components/checkbox';

export const theme = extendTheme({
  components: {
    Button,
    Input: inputTheme,
    Checkbox: checkboxTheme,
  },
  colors: {
    green: {
      100: '#00C7A3',
      200: '#00C7D4',
    },
  },
});
