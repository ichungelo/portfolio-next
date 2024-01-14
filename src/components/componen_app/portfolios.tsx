import { serifDisplay } from "@/app/fonts";
import { portfolios } from "@/data/data";
import {
  Box,
  Container,
  Heading,
  Highlight,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { PortfolioCard } from "./portfoliocard";

const Portfolios = () => {
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
              Portfolio.
            </Highlight>
          </Heading>
          {portfolios.map((portfolio) => {
            return (
                <PortfolioCard portfolio={portfolio} key={portfolio.title} />
            );
          })}
        </VStack>
      </Container>
    </>
  );
};

export { Portfolios };
