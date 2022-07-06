import {
  Box,
  Text,
  useColorModeValue,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

const FontTest = styled(Box)`
font-size:min(21px,5vw);
`

const GardenInfo = () => {
  return (
    <Box display="flex" flexBasis={0} maxW='100%'>
      <FontTest pt={5}>
        <Text borderBottom="1px">
          Hello this project is created for two purpose
        </Text>
        <UnorderedList pl={5} pt={3}>
          <ListItem color={useColorModeValue("green.800", "green.100")}>
            To store my thoughts
          </ListItem>
          <ListItem color={useColorModeValue("green.800", "green.100")} pt={2}>
            To acces my notes anywhere any time for Me
          </ListItem>
        </UnorderedList>
        <Text pt={4} borderBottom="1px">
          About The Black Grimore
        </Text>
        <Text>Lol just a anime reference</Text>
      </FontTest>
    </Box>
  );
};
export default GardenInfo;
