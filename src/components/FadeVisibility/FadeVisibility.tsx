import { FC, MutableRefObject, ReactElement, useRef } from 'react';
import { Box } from '@chakra-ui/react';
import { useOnScreen } from 'hooks';

const FadeVisibility: FC<{ children: ReactElement }> = ({ children }) => {
  const ref = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
  const isOnScreen = useOnScreen(ref, '-10%');

  return (
    <Box
      ref={ref}
      opacity={isOnScreen ? 1 : 0}
      transition="opacity 500ms ease-out"
    >
      {children}
    </Box>
  );
};

export default FadeVisibility;
