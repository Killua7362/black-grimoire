import {
  Flex,
  Center,
  Container,
  Heading,
  VStack,
  Grid,
  GridItem,
  Text,
  Box,
} from "@chakra-ui/react";

const MyStory = () => {
  return (
    <Container>
      <Heading
        as="h2"
        pt={7}
        borderBottom="1px"
        display="inline-block"
        fontSize="2xl"
      >
        My Story
      </Heading>
      <Flex>
        <Text fontSize="17px" pt={2} textAlign="justify">
          &nbsp; &nbsp; Back in 2018 I got my first personal laptop and in 2019
          COVID-19 happened it was like a big vacation for me, I was a fresher
          at my university pursuing Mechanical Engineering. Since childhood, I
          was fascinated by hackers so thinking I would become a hacker I
          installed Kali Linux on my laptop, and using it was tough and I did
          not know how to reinstall Windows. After a few days of using Linux, I
          fell in love with it. I was fascinated by how flexible and powerful it
          was. Since then I have tried all sorts of technologies like AI/ML, Web
          Development, App Development, etc.
        </Text>
      </Flex>
    </Container>
  );
};

export default MyStory;
