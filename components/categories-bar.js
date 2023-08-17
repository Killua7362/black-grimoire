import { Box, Text, Link, HStack, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

const LinkItem = ({ children, path, href }) => {
	const active = path === href;
	const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
	return (
		<NextLink href={href}>
			<Link p={2} borderBottom={active ? "1px" : "0"}>
				{children}
			</Link>
		</NextLink>
	);
};
const CatBar = () => {
	const router = useRouter();
	const path = router.pathname;
	return (
		<Box
			fontSize={{ base: "xs", md: "lg" }}
			w="100%"
			display="flex"
			pt={5}
			justifyContent="center"
		>
			<HStack>
				<LinkItem href="/" path={path}>
					About
				</LinkItem>
				<LinkItem href="/recent" path={path}>
					Recents
				</LinkItem>
			</HStack>
		</Box>
	);
};

export default CatBar;
