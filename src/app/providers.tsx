"use client";

import { Button, ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const colors = {
  primaryFontColor: {
    lightMode: "#333333",
    darkMode: "#eeeeee",
  },
  secondaryFontColor: {
    lightMode: "#333333",
    darkMode: "#eeeeee",
  },
};

const customTheme = extendTheme({
  colors: colors,
  components: {
    Text: {
      baseStyle: (props: any) => ({
        color: mode(
          colors.primaryFontColor.lightMode,
          colors.primaryFontColor.darkMode
        )(props),
      }),
      variants: {
        // used as <Text variant="secondary">
        secondary: (props: any) => ({
          color: mode(
            colors.primaryFontColor.lightMode,
            colors.primaryFontColor.darkMode
          )(props),
        }),
      },
    },
  },

  styles: {
    global: (props: any) => ({
      // Optionally set global CSS styles
      body: {
        color: mode(
          colors.primaryFontColor.lightMode,
          colors.primaryFontColor.darkMode
        )(props),
      },
    }),
  },
});

const darkTheme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
      <ChakraProvider theme={customTheme}>
        <ColorModeScript initialColorMode={darkTheme.config.initialColorMode} />
        {children}
      </ChakraProvider>
  );
}
