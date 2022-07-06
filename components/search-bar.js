import {
  Box,
  FormControl,
  useColorModeValue,
  Input,
  FormLabel,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const SearchBar = (props) => {
  const changeHandler = (event) => {
    props.Changedata(event.target.value);
    event.preventDefault();
  };
  return (
    <Box>
      <FormControl>
        <Input
          h="40px"
          borderColor={useColorModeValue("black", "white")}
          placeholder="Type anything"
          _placeholder={{ color: useColorModeValue("black", "white") }}
          onChange={changeHandler}
        />
      </FormControl>
    </Box>
  );
};

export default SearchBar;
