import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      backgroundImage={"/wave.svg"}
      backgroundPosition={"center"}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      h={240}
    >
      <Text>Test</Text>
    </Box>
  );
};

export { Footer };
