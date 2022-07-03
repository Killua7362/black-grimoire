import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Theme from "../components/themes";
import "../styles/global.css";
import MDX from "../components/mdx";
import { MDXProvider } from "@mdx-js/react";

const colors = {};
const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={Theme}>
      <MDXProvider components={MDX}>
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  );
}

export default MyApp;
