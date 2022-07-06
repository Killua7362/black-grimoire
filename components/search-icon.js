import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Search } from "react-feather";
import {
  useDisclosure,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Link,
  Divider,
  Box,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import SearchBar from "./search-bar";
import { useEffect } from "react";

import { useState } from "react";
const SearchIcon = ({ allNotes }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchValue, setSearchValue] = useState("");
  const close = () => {
    onClose();
    setSearchValue("");
  };
  const n = 4;

  function searchStringInArray(str, strArray) {
    for (var j = 0; j < strArray.length; j++) {
      if (strArray[j].match(str)) return j;
    }
    return -1;
  }
  const forfilteredpost = allNotes
    .map((note, index) => {
      var content = note.content;
      var num = searchStringInArray(
        searchValue,
        note.content.split(/\r\n|\r|\n/).filter(Boolean)
      );
      var modified = note.content
        .split(/\r\n|\r|\n/)
        .filter(Boolean)
        .slice(num - 1, num + 2)
        .join("\n");
      note.modified = modified;
      return note;
    })
    .filter((note, index) => {
      if (searchValue != "") {
        if (typeof note.frontmatter.title != "undefined") {
          return (
            note.content.toLowerCase().includes(searchValue.toLowerCase()) ||
            note.frontmatter.title
              .toLowerCase()
              .includes(searchValue.toLowerCase())
          );
        } else {
          return (
            note.content.toLowerCase().includes(searchValue.toLowerCase())
          );
        }
      }
    });

  return (
    <>
      <IconButton
        size="sm"
        backgroundColor={useColorModeValue("white", "#260e04.900")}
        icon={<Search />}
        onClick={onOpen}
      />

      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={close}
        size={{ md: "xl", base: "sm" }}
        display="flex"
        zIndex="9999"
        scrollBehavior={"inside"}
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />

        <ModalContent>
          <ModalHeader>
            <Text pb={5}>Search</Text>
            <SearchBar
              Changedata={(searchValue) => setSearchValue(searchValue)}
            />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Container>
              <Text>
                {forfilteredpost.map((note, index) => (
                  <>
                    <NextLink href={`${note.slug}`}>
                      <Link>
                        <Text pb={1} pt={1} key={index} onClick={close}>
                          {new String(note.frontmatter.title) == "undefined"
                            ? note.slug
                                .split("/")
                                .slice(-1)
                                .filter(Boolean)
                                .join("-")
                            : note.frontmatter.title}
                        </Text>
                      </Link>
                    </NextLink>
                    {note.modified.length ? (
                      <Box
                        border="1px"
                        pl={2}
                        pr={3}
                        pt={2}
                        pb={2}
                        borderRadius="7"
                        borderColor="green"
                      >
                        <Text>{note.modified}</Text>
                      </Box>
                    ) : (
                      <></>
                    )}
                  </>
                ))}
              </Text>
            </Container>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default SearchIcon;
