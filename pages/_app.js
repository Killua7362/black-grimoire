import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Theme from "../components/themes";

const colors = {};
const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={Theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
