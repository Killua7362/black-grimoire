'use client'
import { marked } from "marked";
import NavBar from "../../components/navbar";
import { Heading, Container, Box, Text } from "@chakra-ui/react";
import { getAllNotes, getNotesBySlug } from "../../lib/api";
import MDX from "@mdx-js/runtime";
import MDXStyle from "../../components/mdx";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import mdxPrism from "mdx-prism";
import Layout from "../../components/layouts/main-layout";
import { useState, useEffect } from 'react'
export default function PostPage({
	note: { slug, content, allNotes, stats, title },
}) {
	const [isClient, setIsClient] = useState(false)
	useEffect(() => { setIsClient(true) }, [])
	return (
		<Layout allNotes={allNotes}>
			<Container maxW="container.md">
				<Container maxW="container.md">
					<Box  >
						<Text fontSize="2xl">
							{new String(title) == "undefined"
								? slug.split("/").slice(-1).filter(Boolean).join("-")
								: title}
						</Text>
						<Text>
							{new Date(JSON.parse(stats).ctime).toLocaleDateString("en-us")}
						</Text>
					</Box>
					{isClient &&
						<MDXRemote {...content} components={MDXStyle} lazy />
					}

				</Container>
			</Container>
		</Layout>
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
		const note = await getNotesBySlug(`notes/${params.slug.join("/")}`, [
			"slug",
			"content",
			"stats",
			"title"
		]);
		const mdxSource = await serialize(note.content, {
			scope: {},
			mdxOptions: {
				remarkPlugins: [],
				rehypePlugins: [mdxPrism],
				format: "mdx",
			},
			parseFrontmatter: false,
		});
		return {
			props: { note: { content: mdxSource, allNotes: allNotes, slug: note.slug, stats: note.stats, title: note.title } },
		};
	} catch (e) {
		return { notFound: true };
	}
}
