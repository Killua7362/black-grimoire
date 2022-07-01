import { IconButton, useColorModeValue } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";

const FloatingButton = () => {
  return (
    <IconButton
      position="fixed"
      bottom="20px"
      zindex={2}
      right="20px"
      backgroundColor={useColorModeValue("#260e04.800", "#F2EEDE.800")}
      icon={<ChevronUpIcon />}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    />
  );
};

export default FloatingButton;
