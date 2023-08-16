import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

const overrides = extendTheme({
	styles: {
		config: {
			initialColorMode: "dark",
			useSystemColorMode: true,
		},
		global: (props) => ({
			body: {
				color: mode('gray.800', 'whiteAlpha.900')(props),
				bg: mode("white", "#262626")(props),
			},
		}),
	},
});

export default overrides;
