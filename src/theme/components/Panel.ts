import { ComponentStyleConfig } from '@chakra-ui/react';

const Panel: ComponentStyleConfig = {
  baseStyle: {
    p: 'min(16rem, 10vw)',
    bg: 'offwhite',
  },
  variants: {
    primary: {
      bgColor: 'primary',
    },
    secondary: {
      bgColor: 'secondary',
      color: 'offwhite',
    },
    accent: {
      bgColor: 'accent',
    },
  },
};

export default Panel;
