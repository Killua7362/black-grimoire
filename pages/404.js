import {
  Heading,
  Text,
  Divider,
  Button,
  Box,
  Container,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Layout from "../components/layouts/main-layout";

const Error = () => {
  return (
    <Layout>
      <Container position="fixed" top="38%">
        <Heading as="h1">Not Found</Heading>
        <Text>The page you are looking for is not found</Text>
        <Divider my={6}></Divider>
        <Box my={6} align="center">
          <NextLink href="/" passHref>
            <Button colorScheme="teal">Return to home</Button>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  );
};
export default Error;
