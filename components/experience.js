
import {
	Container,
	Heading,
	VStack,
	Grid,
	GridItem,
	Text,
	Box,
} from "@chakra-ui/react";

const Exp = () => {
	return (
		<Container>
			<Heading
				as="h2"
				pt={7}
				borderBottom="1px"
				display="inline-block"
				fontSize="2xl"
			>
				Experience
			</Heading>

			<VStack align="stretch" pt={3}>
				<Grid templateColumns="repeat(3, 1fr)">
					<GridItem>
						<Text fontWeight="bold">Aug. 2023 - Present</Text>
					</GridItem>
					<GridItem colSpan={2} pl={3}>
						<Box>
							<Text fontWeight="bold">
								MACHINE LEARNING RESEARCH Volunteer
							</Text>
							<Text fontSize="14px" as="i">
								Ivy, Remote
							</Text>
						</Box>
					</GridItem>

					<GridItem>
						<Text fontWeight="bold">May 2022 - Aug. 2022</Text>
					</GridItem>
					<GridItem colSpan={2} pl={3}>
						<Box>
							<Text fontWeight="bold">
								MACHINE LEARNING RESEARCH INTERN
							</Text>
							<Text fontSize="14px" as="i">
								National Institute of Technology Karnataka, India
							</Text>
						</Box>
					</GridItem>
				</Grid>
			</VStack>
		</Container>
	);
};

export default Exp;
