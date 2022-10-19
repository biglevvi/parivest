import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { ReactElement } from "react";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = ({ children: page }: { children: ReactElement }) => {
  return (
    <Flex h='100vh' w='full' maxW='1440px' mx='auto'>
      <Navbar />
      <Box w='full' pos='relative' >
        <Header />
        {page}
      </Box>
    </Flex>
  );
};

export default Layout;
