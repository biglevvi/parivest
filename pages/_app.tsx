import type { AppProps } from "next/app";
import { Box, ChakraProvider, Heading } from "@chakra-ui/react";
import theme from "../theme";
import Layout from "../components/Layout";
import "@fontsource/lato";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    router.push("/users");
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Box position='fixed' left='0' right='0'>
        <Heading display={["unset", "unset", "none", "none"]}>
          Please view in desktop
        </Heading>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
