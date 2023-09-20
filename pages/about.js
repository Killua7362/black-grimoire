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
import Links from "../components/links";
import MyStory from "../components/mystory";
import Exp from "../components/experience";

export default function Home() {
	return (
		<Layout>
			<Container>
				<Container display={{ md: "flex" }} align="center" alignItems="center">
					<Flex
						display='flex'
						flexDirection='column'
						flexGrow={1}
						flexShrink={0}
						textAlign={{ base: "center", md: "left" }}
					>
						<Heading size="xl">Akshay Bhat</Heading>
						<Links />

					</Flex>
					<Box flexShrink={0} pt={{ base: "8", md: "2" }}>
						<Pfp />
					</Box>
				</Container>
				<MyStory />
				<Exp />
				<Education />
				<Skills />
			</Container>
		</Layout>
	);
}
