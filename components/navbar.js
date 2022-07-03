import NextLink from "next/link";
import Logo from "./logo";
import { useColorModeValue } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

import {
  Link,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  Flex,
  HStack,
  Container,
  Text,
  Heading,
  Divider,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import LightSwitch from "./light_switch";

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

const Navbar = ({ props }) => {
  const { toggleColorMode, colorMode } = useColorMode();
  const router = useRouter();
  const path = router.pathname;
  return (
    <Box
      w="100%"
      position="fixed"
      zIndex={1}
      as="nav"
      backdropFilter="blur(5px)"
      pt={1}
      borderBottomWidth="1px"
      {...props}
    >
      <Container
        display="flex"
        align="center"
        alignItems="center"
        justify="space-between"
        maxW="container.md"
      >
        <Flex align="center">
          <Heading as="h1" size="lg" pl={0}>
            <Logo />
          </Heading>
        </Flex>

        <Box
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem path={path} href="/about">
            <Text p={2} pl={2} fontSize="18px">
              About
            </Text>
          </LinkItem>
          <LinkItem path={path} href="/projects">
            <Text fontSize="18px">Projects</Text>
          </LinkItem>
        </Box>

        <Box flex={1} align="right" p={{ base: "2", md: "3" }}>
          <LightSwitch />
          <Box ml={2} display={{ base: "inline-block", md: "none" }} pl={2}>
            <Menu>
              <MenuButton
                size="sm"
                borderRadius="md"
                borderWidth="1px"
                borderColor={useColorModeValue("black", "white")}
                as={IconButton}
                icon={<HamburgerIcon />}
                transition="all 0.2s"
              ></MenuButton>
              <MenuList minW="0" p="0">
                <MenuItem>
                  <NextLink href="/about">About</NextLink>
                </MenuItem>
                <MenuItem>
                  <NextLink href="/projects">Projects</NextLink>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
