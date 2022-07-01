import { Image, Container, useColorModeValue } from "@chakra-ui/react";

const Pfp = () => {
  return (
    <Container>
      <Image
        src="/images/killua.jpg"
        width="100px"
        borderRadius="full"
        alt="pfp"
        border="2px"
        borderColor={useColorModeValue("black", "white")}
      />
    </Container>
  );
};
export default Pfp;
