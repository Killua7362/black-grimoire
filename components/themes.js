import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

const overrides = extendTheme({
  styles: {
    config: {
      initialColorMode: "dark",
      useSystemColorMode: false,
    },
    global: (props) => ({
      body: {
        color: mode("white.800", "whiteAlpha.900")(props),
        bg: mode("white", "#260e04.800")(props),
      },
    }),
  },
});

export default overrides;
