import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
  Text,
} from "@chakra-ui/react";
const testArray = ["test1", "test2", "test3"];
const Sidebar = () => {
  return (
    <Box position="fixed" w="250px" h="100%" bg="#dfdfdf" zIndex="9999">
      {testArray.map((element) => {
        return <Text>{element}</Text>;
      })}
    </Box>
  );
};

export default Sidebar;
