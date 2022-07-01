import {
  Container,
  Heading,
  VStack,
  Grid,
  GridItem,
  Text,
  Box,
} from "@chakra-ui/react";

const Skills = () => {
  return (
    <Container>
      <Heading
        as="h2"
        pt={7}
        borderBottom="1px"
        display="inline-block"
        fontSize="2xl"
      >
        Technical Skills
      </Heading>

      <VStack align="stretch" pt={3}>
        <Grid templateColumns="repeat(3, 1fr)">
          <GridItem>
            <Text fontWeight="bold">Programming</Text>
          </GridItem>
          <GridItem colSpan={2}>
            <Box>
              <Text fontWeight="bold">Python,JavaScript,</Text>
            </Box>
          </GridItem>
        </Grid>
      </VStack>
    </Container>
  );
};
export default Skills;
