import {
  Box,
  FormControl,
  useColorModeValue,
  Input,
  FormLabel,
} from "@chakra-ui/react";

const SearchBar = () => {
  return (
    <Box pt={5} pb={1}>
      <FormControl>
        <Input
          h="40px"
          borderColor={useColorModeValue("black", "white")}
          placeholder="Type anything or press Alt+K"
          _placeholder={{ color: useColorModeValue("black", "white") }}
        />
      </FormControl>
    </Box>
  );
};

export default SearchBar;
