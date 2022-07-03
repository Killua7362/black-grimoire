import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Theme from "../components/themes";
import "../styles/global.css";
import MDX from "../components/mdx";

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
