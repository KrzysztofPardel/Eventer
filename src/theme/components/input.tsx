import { defineStyleConfig } from '@chakra-ui/react';

export const inputTheme = defineStyleConfig({
  variants: {
    myFlushed: {
      field: {
        border: 'none',
        borderBottom: '1px solid',
        borderRadius: '0',
        _focus: {
          borderColor: 'green.100',
        },
      },
      addon: {
        border: 'none',
      },
    },
    myFlushed2: {
      field: {
        border: 'none',
        borderBottom: '1px solid',

        borderColor: 'green.200',
      },
      addon: {
        border: 'none',
      },
    },
  },
});
