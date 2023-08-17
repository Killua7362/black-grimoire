
import Layout from "../components/layouts/main-layout";
import GridItem from "../components/griditem";
import data from "../components/projects.json";
import {
	SimpleGrid,
	Divider,
	Container,
	Heading,
	VStack,
	Grid,
	Text,
	Box,
	useDisclosure
} from "@chakra-ui/react";
import SearchBar from "../components/search-bar";

import { useState } from 'react'
const projects = ({ }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [searchValue, setSearchValue] = useState("");
	const close = () => {
		onClose();
		setSearchValue("");
	};
	const [debug, setDebug] = useState(true)
	return (
		<Layout>
			{debug === true? (<Text position="absolute" top="50%" bottom="50%" fontSize='10vh'>Still Under Construction</Text>):(


			<Container position="absolute" left={0} right={0} top={24}>
				<SearchBar
					Changedata={(searchValue) => setSearchValue(searchValue)}
				/>
			</Container>
			)}
		</Layout>
	);
};
export default projects;
