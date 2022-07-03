import { Image, Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useState } from "react";
import NextLink from "next/link";

const LogoLayout = styled.span`
  font-size: min(21px, 5.5vw);
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 12px;
`;

const Logo = () => {
  const [img, setImg] = useState("/images/nothovered.png");
  return (
    <NextLink href="/" useHref>
      <LogoLayout
        onMouseEnter={() => setImg("/images/hovered.png")}
        onMouseLeave={() => setImg("/images/nothovered.png")}
      >
        <Image alt="logo" src={img} width={6} height={6} />
        <Text
          fontWeight="semibold"
          color={useColorModeValue("gray,white")}
          pl={1}
        >
          Akshay Bhat
        </Text>
      </LogoLayout>
    </NextLink>
  );
};

export default Logo;
