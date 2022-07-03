import Layout from "../components/layouts/main-layout";
import GardenInfo from "../components/gardeninfo";
import GardenLayout from "../components/layouts/home-garden";
import { getAllPosts } from "../lib/api";
import { Box, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { marked } from "marked";
import NextLink from "next/link";

export default function Home({ allNotes }) {
  return (
    <Layout>
      <GardenLayout />
      <GardenInfo />
      <Box pt={5}>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const allNotes = getAllPosts(["slug"]);
  return {
    props: { allNotes },
  };
}
