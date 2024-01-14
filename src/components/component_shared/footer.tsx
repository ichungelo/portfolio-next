import { serifDisplay } from "@/app/fonts";
import {
  Flex,
  Spacer,
  Text,
  Image,
  ButtonGroup,
  Button,
  Box,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

const Footer = ({ isHomepage }: { isHomepage: boolean }) => {
  return (
    <Box>
      <Image src="wave.svg" alt="wave image" />
      <Flex
        padding={"0 100px 10px"}
        p={{ base: 4 }}
        direction={{ base: "column-reverse", md: "row" }}
        backgroundColor={"rgba(54, 166, 78, 1)"}
        alignItems={"center"}
      >
        <Image
          src="/logo.svg"
          maxH={8}
          bg={"white"}
          p={1}
          borderRadius={"10%"}
          alt="ichungelo logo"
        />
        <Spacer />
        <Text
          fontFamily={serifDisplay.style.fontFamily}
          fontSize={12}
          color={"white"}
        >
          Made with ❤️, Krisna Satriadi
        </Text>
        <Spacer />
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
    </Box>
  );
};

export { Footer };
