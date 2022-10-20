import { Center, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Loading } from "../components/Loading";

const Home: NextPage = () => {
  return (
    <Center>
      {/* <Heading>Home Page</Heading> */}
      <Loading />
    </Center>
  );
};

export default Home;
