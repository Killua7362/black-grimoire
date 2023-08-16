import {
	Center,
	VStack,
	HStack,
	Flex,
	LinkOverlay,
	Text,
	Box,
	Image,
	LinkBox,
	Container,
	Link,
	useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

const GridItem = ({
	children,
	id,
	title,
	techStack,
	description,
	codeLink,
	projectLink,
}) => {
	return <Flex justifyContent="center" bg={useColorModeValue("#f5f5f5", "#2F2F2F")} >
		<Box w="80vmin" minHeight="50px" shadow="md" borderColor={useColorModeValue("white", "black")} >
			<Flex p={4} pb={1} justifyContent="space-between" wrap="nowrap" alignItems="center">
				<Text fontSize={24}> {title}</Text>
				<Text fontSize={13} pt={1} as='i'>{techStack}</Text>
			</Flex>
			<Text p={4} pt={0} pb={0}>{description}</Text>
			{projectLink !== "" ?
				(< HStack p={4} pt={0} pb={0}  >
					<Text  >website: </Text>
					<Text><Link href={projectLink}>{projectLink}</Link></Text>
				</HStack>)
				: ""
			}
			<HStack p={4} pt={0}>
				<Text >github repo: </Text>
				<Text><Link href={codeLink}>{codeLink}</Link></Text>
			</HStack>
		</Box>
	</Flex >;
};

export default GridItem;
