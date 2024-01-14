import { serifDisplay } from "@/app/fonts";
import {
  Flex,
  Spacer,
  Text,
  Image,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

const Footer = ({ isHomepage }: { isHomepage: boolean }) => {
  return (
    <Flex
      direction={"column"}
      backgroundPosition={"center"}
      textAlign={"center"}
      bottom={0}
    >
      <Image src="wave.svg" alt="wave image" />
      <Flex
        p={"0 100px 10px"}
        backgroundColor={"rgba(54, 166, 78, 1)"}
        alignItems={"flex-end"}
        justifyContent={"space-between"}
      >
        <Image
          src="/logo.svg"
          maxH={8}
          bg={"white"}
          p={1}
          borderRadius={"10%"}
          alt="ichungelo logo"
        />
        <Text
          fontFamily={serifDisplay.style.fontFamily}
          fontSize={12}
          color={"white"}
        >
          Made with ❤️, Krisna Satriadi
        </Text>
        <ButtonGroup>
          <Link href="/">
            <Button
              p={2}
              size="md"
              color={isHomepage === true ? "white" : "green.200"}
              variant="link"
              fontFamily={serifDisplay.style.fontFamily}
            >
              Home
            </Button>
          </Link>
          <Link href="/blogs">
            <Button
              p={2}
              size="md"
              color={isHomepage === true ? "green.200" : "white"}
              variant="link"
              fontFamily={serifDisplay.style.fontFamily}
            >
              Blogs
            </Button>
          </Link>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
};

export { Footer };
