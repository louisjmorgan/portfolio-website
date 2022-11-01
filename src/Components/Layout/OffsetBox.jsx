/* eslint-disable react/prop-types */
import { Box, useColorMode, keyframes } from '@chakra-ui/react';

const animationKeyframes = keyframes`
  0% {background-position: left}
  50% {background-position: right}
  100% {background-position: left}
`;
const animation = `${animationKeyframes} 30s ease-in-out infinite`;

function OffsetBox({
  children, offset,
}) {
  const { colorMode } = useColorMode();
  return (
    <Box
      position="relative"
      backgroundColor={colorMode === 'light' ? 'background.light' : 'background.dark'}
      borderRadius="0.25rem"
      maxWidth={['100vw', '100vw', '75ch', '75ch', '75ch']}
      // maxHeight={['auto', 'auto', '75vh', '75vh', '75vh']}
      width="100%"
      _before={{
        content: '""',
        height: '100%',
        width: '100%',
        position: 'absolute',
        animation,
        top: `${offset}`,
        left: `${offset}`,
        backgroundImage: colorMode === 'light'
          ? 'linear-gradient(248deg, #00e4a9, #aed524, #f8d861, #cd528c)'
          : 'linear-gradient(248deg, #dc2f52,#c55420, #a720c5, #20dcdb)',
        zIndex: -1,
        backgroundSize: '600%',
        borderRadius: '0.25rem',
      }}
    >
      {children}
    </Box>
  );
}

export default OffsetBox;
