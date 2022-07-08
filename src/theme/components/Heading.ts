import { ComponentStyleConfig } from '@chakra-ui/react';

const Heading: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: '400',
  },
  variants: {
    h1: {
      fontSize: { base: 'lgFluid', md: 'xlFluid' },
      fontWeight: 'bold',
      lineHeight: 1.1,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontSize: { base: 'mdFluid', md: 'lgFluid' },
      fontWeight: 'normal',
      lineHeight: 1.1,
    },
  },
};

export default Heading;
