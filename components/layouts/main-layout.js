import { Spinner, Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../navbar";
import { useEffect, useState } from "react";
import FloatingButton from "../floating_button";
import Footer from "../footer";
import SideBar from "../sidebar";

const Main = ({ children, maxW, allNotes = [] }) => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<Box>
				<Head>
					<title>Killua</title>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
				</Head>
				<Box as="main" pb={8}>
					<Navbar allNotes={allNotes} />
					<Container maxW="container.md" pt={{ base: "16", md: "20" }}>
						<Container maxW="container.md" pt="5">
							{children}
						</Container>
						<Container maxW="container.md" pt="5">
							<Footer />
						</Container>
					</Container>
				</Box>
			</Box>
			<FloatingButton />
		</>
	);
};

export default Main;
