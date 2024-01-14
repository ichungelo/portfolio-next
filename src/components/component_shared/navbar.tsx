"use client";

import React from "react";
import Link from "next/link";
import {
  Text,
  Image,
  Box,
  Flex,
  Spacer,
  Center,
  ButtonGroup,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { serifDisplay } from "@/app/fonts";

const Navbar = ({ isHomepage }: { isHomepage: boolean }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box p="0 34px" color="grey">
      <Flex p={{ base: 4 }} direction={{ base: "column", md: "row"}}>
        <Box p="10px 36px">
          <Center p={2}>
            <Image maxH="28px" p="0 1px" src="/logo.svg" alt="ichun logo" />
            <Text fontFamily={serifDisplay.style.fontFamily} fontSize="4xl">
              risna.
            </Text>
          </Center>
        </Box>
        <Spacer />
        <ButtonGroup gap={10} p="24px 36px">
          <Link href="/">
            <Button
              p={2}
              size="md"
              color={isHomepage === true ? "green" : "gray"}
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
              color={isHomepage === true ? "gray" : "green"}
              variant="link"
              fontFamily={serifDisplay.style.fontFamily}
            >
              Blogs
            </Button>
          </Link>
          <Button
            onClick={toggleColorMode}
            size="md"
            variant="link"
            fontFamily={serifDisplay.style.fontFamily}
            p={2}
            width={10}
            height={10}
            borderRadius="50%"
            _hover={
              colorMode === "light"
                ? { color: "yellow", bg: "purple.400" }
                : { color: "yellow", bg: "blue.400" }
            }
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export { Navbar };
