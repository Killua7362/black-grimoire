import { marked } from "marked";
import NavBar from "../../components/navbar";
import { Divider, Heading, Container, Box, Text } from "@chakra-ui/react";
import { getAllNotes, getNoteBySlug } from "../../lib/api";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import mdxPrism from "mdx-prism";
import MDXStyle from "../../components/mdx";
export default function NotePage({
  note: { frontmatter, slug, content, allNotes, stats },
}) {
  return (
    <>
      <NavBar allNotes={allNotes} />
      <Container maxW="container.md" pt="10">
        <Container maxW="container.md" pt="6">
          <Text p={3} fontSize="2xl">
            {new String(frontmatter.title) == "undefined"
              ? slug.split("/").slice(-1).filter(Boolean).join("-")
              : frontmatter.title}
          </Text>
          <MDXRemote {...content} lazy />
          {new Date(JSON.parse(stats).ctime).toLocaleDateString("en-us")}
        </Container>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const notes = await getAllNotes();
  const result = [];
  for (const element of notes) {
    result.push({ params: { slug: [element["slug"]] } });
  }
  return {
    paths: result,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  try {
    const allNotes = await getAllNotes();
    const note = await getNoteBySlug(`notes/${params.slug.join("/")}`);
    const mdxSource = await serialize(note.content, {
      // made available to the arguments of any custom mdx component
      scope: {},
      // MDX's available options, see the MDX docs for more info.
      // https://mdxjs.com/packages/mdx/#compilefile-options
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [mdxPrism],
        format: "mdx",
      },
      // Indicates whether or not to parse the frontmatter from the mdx source
      parseFrontmatter: false,
    });
    return {
      props: {
        note: {
          frontmatter: note.frontmatter,
          slug: note.slug,
          content: mdxSource,
          allNotes: allNotes,
          stats: JSON.stringify(note.stats),
        },
      },
    };
  } catch (e) {
    return { notFound: true };
  }
}
