import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layouts/main-layout";
import {
  Box,
  Divider,
  useColorModeValue,
  Flex,
  Grid,
  GridItem,
  HStack,
  VStack,
  Container,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";
import Pfp from "../components/pfp";
import Education from "../components/education";
import Skills from "../components/skills";

export default function Home() {
  return (
    <Layout>
      <Container pt={7}>
        <Container display={{ md: "flex" }} align="center" alignItems="center">
          <Box
            flexGrow={1}
            flexShrink={0}
            textAlign={{ base: "center", md: "left" }}
          >
            <Heading size="xl">Akshay Bhat</Heading>
            <Text pt={4} fontSize="ml">
              I am a developer and a Fitness enthu for now!
            </Text>
          </Box>
          <Box flexShrink={0} pt={{ base: "8", md: "2" }}>
            <Pfp />
          </Box>
        </Container>
        <Education />
        <Skills />
      </Container>
    </Layout>
  );
}
