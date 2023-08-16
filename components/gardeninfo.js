import {
  Box,
  Text,
  useColorModeValue,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

const FontTest = styled(Box)`
  font-size: min(21px, 5vw);
`;

const GardenInfo = () => {
  return (
    <Box display="flex" flexBasis={0} maxW="100%">
      <FontTest pt={5}>
        <Text borderBottom="1px">
          Hello this project is created for two purpose
        </Text>
        <UnorderedList pl={5} pt={3}>
          <ListItem color={useColorModeValue("green.800", "green.100")}>
            To store my thoughts
          </ListItem>
          <ListItem color={useColorModeValue("green.800", "green.100")} pt={2}>
            To acces my notes anywhere any time
          </ListItem>
        </UnorderedList>
        <Text pt={4} borderBottom="1px">
          About The Black Grimore
        </Text>
        <Text pt={2} fontSize={19}>
          &nbsp;&nbsp;Black Grimore is my personal digital garden,It is often
          referred to as a "digital notebook," "second brain," or "personal
          knowledge base," is a concept that revolves around creating an
          interconnected collection of thoughts, ideas, notes, and information
          in a digital format. It's a more fluid and flexible approach to
          personal knowledge management compared to traditional note-taking
          methods. The main motivation behind creating a digital garden is to
          facilitate thinking, learning, and collaboration by embracing the
          principles of interconnectedness and continuous growth.{" "}
        </Text>
        <Text fontSize={18}>
          PS:It's a anime reference from black clover if anyone is wondering{" "}
        </Text>
      </FontTest>
    </Box>
  );
};
export default GardenInfo;
