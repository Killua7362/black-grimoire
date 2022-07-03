import GardenLayout from "../../components/layouts/home-garden";
import Layout from "../../components/layouts/main-layout";

import { Box, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { getAllPosts, getPostBySlug } from "../../lib/api";

export default function Tags({ allNotes }) {
  return (
    <Layout>
      <GardenLayout />
      {allNotes.map((home, index) => (
        <NextLink href={`${home.slug}`}>
          <Text>{home.slug}</Text>
        </NextLink>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const allNotes = getAllPosts(["title", "content", "slug"]);

  const result = [{ params: { slug: [] } }];

  for (const element of allNotes) {
    result.push({ params: { slug: [element["slug"]] } });
  }
  // const test = getPostBySlug(params.slug[0], ["title", "slug", "content"]);
  // console.log(getPostBySlug(result[1], ["slug"]));
  return {
    props: { allNotes },
  };
}
