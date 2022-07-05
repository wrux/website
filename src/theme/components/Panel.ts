import { ComponentStyleConfig } from '@chakra-ui/react';

const Panel: ComponentStyleConfig = {
  baseStyle: {
    p: 'min(16rem, 10vw)',
    bg: 'offwhite',
    color: 'secondary',
  },
  variants: {
    primary: {
      bgColor: 'primary',
      color: 'black',
    },
    secondary: {
      bgColor: 'secondary',
      color: 'offwhite',
    },
  },
};

export default Panel;
