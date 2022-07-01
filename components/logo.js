import { Image, Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useState } from "react";
import Link from "next/link";

const LogoLayout = styled.span`
  font-size: 21px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 12px;
`;

const Logo = () => {
  const [img, setImg] = useState("/images/nothovered.png");
  return (
    <Link href="/" useHref>
      <LogoLayout
        onMouseEnter={() => setImg("/images/hovered.png")}
        onMouseLeave={() => setImg("/images/nothovered.png")}
      >
        <Image alt="logo" src={img} width={6} height={6} />
        <Text fontWeight="bold" color={useColorModeValue("gray,white")}>
          Akshay Bhat
        </Text>
      </LogoLayout>
    </Link>
  );
};

export default Logo;
