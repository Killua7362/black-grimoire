import { HStack, Box, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const HomePageText = styled(Text)`
  font-weight: 1000;
  border-radius: 5%;
`;

const TestFont = styled(VStack)`
  font-size: min(30px, 4vw);
`;

const MainHeading = () => {
  return (
    <Box w="100%" display="flex" alignItems="center" justifyContent="center">
      <TestFont>
        <Box display="flex">
          <Box pr={2}>
            <HomePageText
              align="center"
              p={1}
              backgroundColor={useColorModeValue("#333333", "white")}
              textColor={useColorModeValue("white", "#333333")}
            >
              The Black Grimore
            </HomePageText>
          </Box>

          <Box>
            <Text
              borderRadius="5%"
              align="center"
              p={1}
              textColor={useColorModeValue("#555555", "white")}
            >
              - a Digital Garden
            </Text>
          </Box>
        </Box>
        <HStack>
          <Box></Box>
        </HStack>
      </TestFont>
    </Box>
  );
};

export default MainHeading;
