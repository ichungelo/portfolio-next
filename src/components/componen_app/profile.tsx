import {
  Box,
  HStack,
  Heading,
  Highlight,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { serifDisplay } from "@/app/fonts";
import React from "react";

const Profile = () => {
  return (
    <>
      <HStack justifyContent={"center"} align={"center"} p={"10px 20px"} spacing={10}>
        <Box>
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
            <Text fontSize={38} fontFamily={serifDisplay.style.fontFamily}>
              <Highlight query="Krisna Satriadi" styles={{ color: "green" }}>
                I am Krisna Satriadi
              </Highlight>
            </Text>
            <Text fontSize={24} fontFamily={serifDisplay.style.fontFamily}>
            <Highlight query="Backend Engineer" styles={{ color: "green" }}>
              Your Backend Engineer
              </Highlight>
            </Text>
          </VStack>
        </Box>
        <Box>
          <Image maxH={440} src="/profile-photo.png" alt="krisna photo" />
        </Box>
      </HStack>
    </>
  );
};

export { Profile };
