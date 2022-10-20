import { Box, Flex, Stack } from "@chakra-ui/react";
import Image from "next/image";
import { ReactElement } from "react";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = ({ children: page }: { children: ReactElement }) => {
  return (
    <Flex
      h='100vh'
      w='full'
      maxW='1440px'
      mx='auto'
      display={["none", "none", "flex"]}>
      <Navbar />
      <Stack w='full' pos='relative'>
        <Header />
        <Box
          w='full'
          pt='20'
          overflowY='auto'
          sx={{
            "&::-webkit-scrollbar": {
              width: "8px",
              backgroundColor: "transparent",
              borderRadius: "30px",
            },
            "&::-webkit-scrollbar-thumb": {
              width: "8px",
              backgroundColor: "transparent",
              borderRadius: "30px",
            },
          }}>
          <Stack px='5' pb='4'>
            {page}
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Layout;
