import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Moon, Sun } from "react-feather";
const LightSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <IconButton
      size="sm"
      onClick={toggleColorMode}
      display={{ base: "none", md: "inline" }}
      backgroundColor={useColorModeValue("white", "#260e04.400")}
      icon={colorMode === "light" ? <Sun /> : <Moon />}
      pl={1}
    />
  );
};
export default LightSwitch;
