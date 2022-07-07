import { ComponentStyleConfig } from '@chakra-ui/react';

const Panel: ComponentStyleConfig = {
  baseStyle: {
    p: 'min(16rem, 10vw)',
    bg: 'offwhite',
    color: 'dark',
  },
  variants: {
    primary: {
      bgColor: 'primary',
      color: 'dark',
    },
    secondary: {
      bgColor: 'secondary',
      color: 'white',
    },
  },
};

export default Panel;
