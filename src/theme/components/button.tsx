import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: 'base',
    _disabled: {
      filter: 'grayscale(1)',
    },
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 3,
    },
    md: {
      fontSize: 'md',
      px: 6,
      py: 4,
    },
  },
  variants: {
    myVariant: {
      background: '#00C7A3',
      borderRadius: '5px',
      p: '0.75rem',
      fontSize: '0.75rem',
    },
    outline: {
      border: '1px solid',
      color: 'purple.500',
    },
    solid: {
      bg: 'purple.500',
      color: 'white',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
});
