import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import Layout from "../components/Layout";
import "@fontsource/lato";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box position='fixed' left='0' right='0'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
