import { serifDisplay } from "@/app/fonts";
import { portfolios } from "@/data/data";
import {
  Box,
  Container,
  Heading,
  Highlight,
  Text,
  VStack,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { PortfolioCard } from "./portfoliocard";

const Portfolios = () => {
  return (
    <Container maxW={"70%"} p={"40px 0"}>
      <Heading fontFamily={serifDisplay.style.fontFamily} as="h2" fontSize={48}>
        <Highlight query="." styles={{ color: "green" }}>
          Portfolio.
        </Highlight>
      </Heading>
      <Flex align={"start"} flexDirection={"column"} alignItems={"center"}>
        {portfolios.map((portfolio) => {
          return <PortfolioCard portfolio={portfolio} key={portfolio.title} />;
        })}
      </Flex>
    </Container>
  );
};

export { Portfolios };
