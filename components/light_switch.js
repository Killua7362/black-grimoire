import { IconButton, useColorMode,useColorModeValue } from "@chakra-ui/react";
import { Moon, Sun } from "react-feather";
const LightSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <IconButton
      size="sm"
      onClick={toggleColorMode}
      backgroundColor={useColorModeValue("#F2EEDE.800", "#260e04.800")}
      icon={colorMode === "light" ? <Sun /> : <Moon />}
    />
  );
};
export default LightSwitch;
