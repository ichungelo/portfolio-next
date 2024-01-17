import {
  Box,
  Divider,
  Flex,
  HStack,
  Heading,
  Highlight,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { serifDisplay } from "@/app/fonts";
import React from "react";

const Profile = () => {
  return (
    <>
      <Flex justifyContent={"center"} align={"center"} flexWrap={"wrap"}>
        <Box paddingX={10}>
          <VStack align={"end"}>
            <Heading
              fontFamily={serifDisplay.style.fontFamily}
              as="h1"
              fontSize={120}
            >
              <Highlight query="," styles={{ color: "green" }}>
                Hello,
              </Highlight>
            </Heading>
            <Text fontSize={38} fontFamily={serifDisplay.style.fontFamily} align={"end"}>
              <Highlight query="Krisna Satriadi" styles={{ color: "green" }}>
                I am Krisna Satriadi
              </Highlight>
            </Text>
            <Text fontSize={24} fontFamily={serifDisplay.style.fontFamily} align={"end"}>
            <Highlight query="Backend Engineer" styles={{ color: "green" }}>
              Your Backend Engineer
              </Highlight>
            </Text>
          </VStack>
        </Box>
        <Box paddingX={10}>
          <Image maxH={440} src="/profile-photo.png" alt="krisna photo" />
        </Box>
      </Flex>
    </>
  );
};

export { Profile };
