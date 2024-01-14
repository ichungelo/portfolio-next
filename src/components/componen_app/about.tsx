import React from "react";
import {
  Heading,
  Highlight,
  VStack,
  Text,
  Container,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { serifDisplay } from "@/app/fonts";

const About = () => {
  return (
    <>
      <Container maxW={"70%"} p={20}>
        <VStack align={"start"}>
          <Heading
            fontFamily={serifDisplay.style.fontFamily}
            as="h2"
            fontSize={48}
          >
            <Highlight query="." styles={{ color: "green" }}>
              About.
            </Highlight>
          </Heading>
          <Text fontSize={16}>
            Detail-oriented Backend Engineer since August 2022 of hands-on
            experience designing and implementing serverless applications using
            AWS technologies. Adept at integrating with third-party APIs and
            working within Agile frameworks to deliver high-quality, scalable
            software solutions. Strong problem-solving skills and a commitment
            to continuous improvement.
          </Text>
        </VStack>
      </Container>
    </>
  );
};

export { About };
