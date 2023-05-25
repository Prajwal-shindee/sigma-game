import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
// import { clear } from '@testing-library/user-event/dist/types/setup/directApi';

  const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  // const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      variant="ghost"
      color="current"
      pos={"fixed"}
      top={"4"}
      right={"4"}
      onClick={toggleColorMode}
      zIndex={'overlay'}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
 export default ColorModeSwitcher;