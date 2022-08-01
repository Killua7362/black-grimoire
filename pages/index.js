import Layout from "../components/layouts/main-layout";
import GardenInfo from "../components/gardeninfo";
import GardenLayout from "../components/layouts/home-garden";
import { Box, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { marked } from "marked";
import NextLink from "next/link";

import { getAllNotes, getNoteBySlug } from "../lib/api";
export default function Home({ allNotes }) {
  return (
    <Layout allNotes={allNotes}>
      <GardenLayout />
      <GardenInfo />
      <Box pt={5}></Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const allNotes = await getAllNotes();
  return {
    props: { allNotes } || null,
  };
}
