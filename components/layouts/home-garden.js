import Head from "next/head";
import Image from "next/image";
import Layout from "./main-layout";
import MainHeading from "../heading";
import GardenInfo from "../gardeninfo";
import SearchBar from "../search-bar";
import CatBar from "../categories-bar";
import {
  Box,
  Divider,
  useColorModeValue,
  Flex,
  Grid,
  GridItem,
  HStack,
  VStack,
  Container,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

export default function GardenLayout() {
  return (
    <>
      <MainHeading />
      <SearchBar />
      <CatBar />
    </>
  );
}
