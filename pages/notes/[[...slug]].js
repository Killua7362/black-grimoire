'use client'
import { marked } from "marked";
import NavBar from "../../components/navbar";
import { Divider, Heading, Container, Box, Text } from "@chakra-ui/react";
import { getAllNotes, getNoteBySlug } from "../../lib/api";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import mdxPrism from "mdx-prism";
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import remarkMath from 'remark-math'
import MDXStyle from "../../components/mdx";
import { useState, useEffect } from 'react'
export default function NotePage({
	note: { frontmatter, slug, content, allNotes, stats },
}) {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);
	return (
		<>
			<NavBar allNotes={allNotes} />
			<Container maxW="container.md" pt="10">
				<Container maxW="container.md" pt="6">
					<Box p={3} pl={5} >
						<Text fontSize={27}>
							{new String(frontmatter.title) == "undefined"
								? slug.split("/").slice(-1).filter(Boolean).join("-").trimStart()
								: frontmatter.title}
						</Text>
						<Text as="i">
							{new String(stats) == "null" ? " " : new Date(JSON.parse(stats).ctime).toLocaleDateString("en-us")}
						</Text>
					</Box>
					{isClient &&
						<Text pl={5} fontSize={18}>
							<MDXRemote {...content} />
						</Text>
					}
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
			scope: {},
			mdxOptions: {
				remarkPlugins: [remarkParse, remarkRehype,remarkMath],
				rehypePlugins: [mdxPrism, rehypeStringify],
				format: "mdx",
			},
			parseFrontmatter: false,
		});
		return {
			props: {
				note: {
					frontmatter: note.frontmatter || " ",
					slug: note.slug || " ",
					content: mdxSource || " ",
					allNotes: allNotes,
					stats: JSON.stringify(note.stats) || "{}",
				},
			},
		};
	} catch (e) {
		return { notFound: true };
	}
}
