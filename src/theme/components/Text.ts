import { ComponentStyleConfig } from '@chakra-ui/react';

const Text: ComponentStyleConfig = {
  variants: {
    focus: {
      fontSize: 'mdFluid',
      fontWeight: '500',
      fontStyle: 'italic',
      lineHeight: 1.25,
    },
    focusSm: {
      fontSize: 'smFluid',
      fontWeight: '500',
      fontStyle: 'italic',
      lineHeight: 1.15,
    },
  },
};

export default Text;
