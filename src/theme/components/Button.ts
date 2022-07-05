import { ComponentStyleConfig } from '@chakra-ui/react';
import { outlineFocus } from 'theme/common';

const Button: ComponentStyleConfig = {
  baseStyle: {
    textUnderlineOffset: '0.2em',
    ...outlineFocus,
  },
  variants: {},
};

export default Button;
