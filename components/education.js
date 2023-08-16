import {
  Container,
  Heading,
  VStack,
  Grid,
  GridItem,
  Text,
  Box,
} from "@chakra-ui/react";

const Education = () => {
  return (
    <Container>
      <Heading
        as="h2"
        pt={7}
        borderBottom="1px"
        display="inline-block"
        fontSize="2xl"
      >
        Education
      </Heading>

      <VStack align="stretch" pt={3}>
        <Grid templateColumns="repeat(3, 1fr)">
          <GridItem>
            <Text fontWeight="bold">2019 - 2023</Text>
          </GridItem>
          <GridItem colSpan={2}>
            <Box>
              <Text fontWeight="bold">
                National Institute of Technology Karnataka
              </Text>
              <Text fontSize="14px" as="i">
                Bachelor of Technology in Mechanical Engineering
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </VStack>
    </Container>
  );
};

export default Education;
