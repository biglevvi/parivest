import { Avatar, Box, Flex, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { NotificationIcon, SyncIcon } from "./Svgs";
import adminLogo from "../public/Ellipse 6.png";
import { usePathNameU } from "./hooks";

const Header = () => {
  const router = useRouter();
  const pathNameU = usePathNameU();

  return (
    <Flex
      position='absolute'
      top='0'
      left='0'
      right='0'
      zIndex='1000'
      pl='7'
      pr='3'
      h='70px'
      w='full'
      bgColor='#FFFFFF'
      align='center'
      justify='space-between'>
      <Text fontSize='32px' color='#295AA9'>
        {pathNameU}
      </Text>

      <HStack spacing='5' align='center'>
        <SyncIcon /> <NotificationIcon />
        <div>
          <Text fontSize='20px'>Ole gunnar</Text>
          <Text fontSize='14px' color='#616976'>
            Super admin
          </Text>
        </div>
        <Flex h='full'>
          <Image src={adminLogo} />
        </Flex>
      </HStack>
    </Flex>
  );
};

export default Header;
