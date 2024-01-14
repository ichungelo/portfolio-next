import {
  Box,
  Container,
  Heading,
  Highlight,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { SkillCard } from "./skillcard";
import { serifDisplay } from "@/app/fonts";
import ScrollCarousel from "scroll-carousel-react";
import { skills } from "@/data/data";

const Skills = () => {
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
              Skills.
            </Highlight>
          </Heading>
          <ScrollCarousel autoplay autoplaySpeed={7}>
            {skills.map((item) => (
              <Box width={180} height={180} key={item.no}>
                <SkillCard skill={item} key={item.no} />
              </Box>
            ))}
          </ScrollCarousel>
        </VStack>
      </Container>
    </>
  );
};

export { Skills };
