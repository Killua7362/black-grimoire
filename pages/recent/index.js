import GardenLayout from "../../components/layouts/home-garden";
import Layout from "../../components/layouts/main-layout";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { Box, Text, Container, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { getAllNotes, getNoteBySlug } from "../../lib/api";
import fs from "fs";

export default function Tags({ allNotes }) {
  return (
    <Layout allNotes={allNotes}>
      <GardenLayout />
      <Box pt={3}>
        {allNotes.slice(0, 5).map((note, index) => (
          <NextLink href={`${note.slug}`}>
            <Container p={2}>
              <Box
                border="1px"
                borderColor={ useColorModeValue("black","white") }
                borderRadius={8}
                p={2}
                color={useColorModeValue("#555555", "white")}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text pl={2} key={index} fontSize="xl" fontWeight="semibold">
                    {new String(note.frontmatter.title) == "undefined"
                      ? note.slug.split("/").slice(-1).filter(Boolean).join("-")
                      : note.frontmatter.title}
                  </Text>
                  <Text fontSize="sm">
                    {new Date(note.stats.ctime).toLocaleDateString("en-us")}
                  </Text>
                </Box>
                <Text pl={7} pt={1} key={index}>
                  {note.frontmatter.description}
                </Text>
              </Box>
            </Container>
          </NextLink>
        ))}
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const allNotes = await getAllNotes();
  return {
    props: { allNotes },
  };
}
