import { marked } from "marked";
import NavBar from "../../components/navbar";
import { Heading, Container, Box } from "@chakra-ui/react";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import MDX from "@mdx-js/runtime";
import MDXStyle from "../../components/mdx";

export default function PostPage({ post }) {
  return (
    <>
      <NavBar />
      <Container maxW="80%" pt="10">
        <Container maxW="80%" pt="10">
          <MDX components={MDXStyle}>{post.content}</MDX>
        </Container>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const posts = await getAllPosts(["slug"]);
  const result = [];

  for (const element of posts) {
    result.push({ params: { slug: [element["slug"]] } });
  }
  return {
    paths: result,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  try {
    const posts = await getAllPosts(["slug"]);
    // console.log(posts);
    console.log(`notes/${params.slug.join("/")}`);
    const post = await getPostBySlug(`notes/${params.slug.join("/")}`, [
      "title",
      "slug",
      "content",
    ]);
    return {
      props: { post },
    };
  } catch (e) {
    return { notFound: true };
  }
}
