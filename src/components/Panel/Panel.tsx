import {
  Box,
  forwardRef,
  HTMLChakraProps,
  ThemingProps,
  useStyleConfig,
} from '@chakra-ui/react';

export interface PanelOptions {}

export interface PanelProps
  extends HTMLChakraProps<'section'>,
    PanelOptions,
    ThemingProps<'Box'> {}

const Panel = forwardRef<PanelProps, 'section'>(
  ({ children, variant, ...props }, ref) => {
    const styles = useStyleConfig('Panel', { variant });

    return (
      <Box ref={ref} as="section" sx={styles} {...props}>
        {children}
      </Box>
    );
  }
);

export default Panel;
