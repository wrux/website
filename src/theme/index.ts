import { extendTheme } from '@chakra-ui/react';
import components from './components';
import colors from './colors';
import fonts from './fonts';
import fontSizes from './fontSizes';
import global from './global';

const theme = extendTheme({
  components,
  colors,
  fonts,
  fontSizes,
  styles: {
    global,
  },
});

export default theme;
