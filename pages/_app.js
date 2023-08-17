import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Theme from "../components/themes";
import "../styles/global.css";
import MDX from "../components/mdx";
import App from 'next/app'
const colors = {};
const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={Theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
MyApp.getInitialProps = async (appContext) => {
	// calls page's `getInitialProps` and fills `appProps.pageProps`
	const appProps = await App.getInitialProps(appContext);

	return { ...appProps };
};
export default MyApp;
