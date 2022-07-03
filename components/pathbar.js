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

const PathBar = ({ props }) => {
  const [path, setPath] = useState([]);

  useEffect(() => {
    const currentURL = window.location.href; // returns the absolute URL of a page
    const pathname = window.location.pathname; //returns the current url minus the domain name
    const array = pathname.split("/").filter(Boolean);
    setPath(array);
  }, []);
  return (
    <Box
      w="container.md"
      zIndex={2}
      position="fixed"
      as="nav"
      backdropFilter="blur(5px)"
      pt={1}
      {...props}
    >
      <Container
        display="flex"
        align="left"
        alignItems="center"
        maxW="container.md"
      >
        <Flex>
          {path.map((course, idx) => (
            <Link href={"/"+course}>
              <Text>{course} > </Text>
            </Link>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default PathBar;
