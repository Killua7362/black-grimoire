import Layout from "../components/layouts/main-layout";
import GridItem from "../components/griditem";
import data from "../components/projects.json";
import {
	SimpleGrid,
	Divider,
	Flex,
	Container,
	Heading,
	VStack,
	Grid,
	Text,
	Box,
} from "@chakra-ui/react";
const projects = ({ }) => {
	return (
		<Layout>
			<Flex position="absolute" left={50} right={0} top={24} w='100%' >
				<SimpleGrid columns={1} mb={4} spacing={4} >
					{data.map((ele, i) => (
						<GridItem
							id={`grid-item-${i}`}
							title={data[i].title}
							techStack={data[i].techStack}
							description={data[i].description}
							projectLink={"projectLink" in data[i] ? data[i].projectLink : ""}
							codeLink={data[i].codeLink}
						/>
					))}
				</SimpleGrid>
			</Flex>
		</Layout>
	);
};
export default projects;
