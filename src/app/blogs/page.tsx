"use client";

import { Footer } from "@/components/componen_app/footer";
import { Navbar } from "@/components/componen_app/navbar";
import { WarningTwoIcon } from "@chakra-ui/icons";
import { AbsoluteCenter, Box, Center, Text } from "@chakra-ui/react";

const Blogs = () => {
  return (
    <>
      <Box>
        <Navbar isHomepage={false} />
        <Box position="relative" mt={"50vh"}>
          <AbsoluteCenter p="4" color="black" axis="both">
            <Text fontSize="4xl" align={"center"}>
              <WarningTwoIcon w={100} h={100} color={"yellow.400"} />
            </Text>
            <Text fontSize="4xl">Under Construction</Text>
          </AbsoluteCenter>
        </Box>
        <Footer isHomepage={false} />
      </Box>
    </>
  );
};

export default Blogs;
