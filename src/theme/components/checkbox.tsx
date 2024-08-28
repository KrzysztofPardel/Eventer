import { checkboxAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  checkboxAnatomy.keys,
);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  label: {
    fontFamily: 'mono', // change the font family of the label
  },
  control: {
    padding: 1, // change the padding of the control
    borderRadius: 0, // change the border radius of the control
    bg: '#00C7A3',
  },
});

export const checkboxTheme = defineMultiStyleConfig({ baseStyle });
