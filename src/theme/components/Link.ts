import { ComponentStyleConfig } from '@chakra-ui/react';
import { outlineFocus } from 'theme/common';

const Link: ComponentStyleConfig = {
  baseStyle: {
    textUnderlineOffset: '0.2em',
    color: 'secondary',
    ...outlineFocus,
  },
  variants: {},
};

export default Link;
