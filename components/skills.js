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
            <Text fontWeight="bold">Libraries</Text>
          </GridItem>
          <GridItem colSpan={2}>
            <Box>
              <Text fontWeight="bold">Tensorflow, Pytorch, Jax, scikit-learn, pandas, NumPy, matplotlib</Text>
            </Box>
          </GridItem>
        </Grid>

        <Grid templateColumns="repeat(3, 1fr)">
          <GridItem>
            <Text fontWeight="bold">Technologies</Text>
          </GridItem>
          <GridItem colSpan={2}>
            <Box>
              <Text fontWeight="bold">Git, Docker, Linux/Unix, Vim</Text>
            </Box>
          </GridItem>
        </Grid>

        <Grid templateColumns="repeat(3, 1fr)">
          <GridItem>
            <Text fontWeight="bold">Languages</Text>
          </GridItem>
          <GridItem colSpan={2}>
            <Box>
              <Text fontWeight="bold">Python, Javascript, SQL, HTML/CSS</Text>
            </Box>
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(3, 1fr)">
          <GridItem>
            <Text fontWeight="bold">Web Development</Text>
          </GridItem>
          <GridItem colSpan={2}>
            <Box>
              <Text fontWeight="bold">ReactJS, NextJS, NodJS, MongoDB</Text>
            </Box>
          </GridItem>
        </Grid>
      </VStack>
    </Container>
  );
};
export default Skills;
