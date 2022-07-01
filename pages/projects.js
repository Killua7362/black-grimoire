import Layout from "../components/layouts/main-layout";
import { Container, SimpleGrid, Divider } from "@chakra-ui/react";
import GridItem from "../components/griditem";

const projects = ({}) => {
  const thumbnail = `/images/hovered.png`;
  return (
    <Layout>
      <Container pt={10}>
        <SimpleGrid columns={[1, 1, 2]} mb={4} spacing={10}>
          <GridItem id="test1" title="test1" thumbnail={thumbnail}></GridItem>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default projects;
