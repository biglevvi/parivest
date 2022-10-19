import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import logo from "../public/Logo.png";
import { usePathNameU } from "./hooks";
import {
  AdminIcon,
  HomeIcon,
  InvestmentIcon,
  KeyIcon,
  LogoutIcon,
  SavingsIcon,
  UsersIcon,
  WalletIcon,
} from "./Svgs";

const NavLink = ({
  text,
  children,
  href,
}: {
  text: string;
  children: ReactElement;
  href: string;
}) => {
  const pathNameU = usePathNameU();
  // console.log(pathNameU)

  return (
    <Link href={href}>
      <Flex
        cursor='pointer'
        // px='4'
        // py='2'
        borderRadius='8px'
        // spacing='4'
        bgColor={pathNameU === text ? "#E7EEF9" : "unset"}
        h='40px'
        overflow='hidden'
        align='center'>
        <Divider
          orientation='vertical'
          h='full'
          borderColor={pathNameU === text ? "#295AA9" : "transparent"}
          borderWidth='3px'
          bgColor={pathNameU === text ? "#295AA9" : "transparent"}
          mr='2'
        />
        {children}
        <Text pl='3' fontSize='16px' color='#8C94A1'>
          {text}
        </Text>
      </Flex>
    </Link>
  );
};

const Navbar = () => {
  const pathNameU = usePathNameU();
  return (
    <Stack justify='space-between' h='full' bgColor='#FFFFFF' w='255px' py='5'>
      <div style={{ height: "38px" }}>
        <Image src={logo} height='38px' />
      </div>
      <Stack pt='10' spacing='4' px='2' flex='1'>
        <NavLink href='/' text='Home'>
          <HomeIcon color={pathNameU === "Home" ? "#295AA9" : "#8C94A1"} />
        </NavLink>
        <NavLink href='/users' text='Users'>
          <UsersIcon color={pathNameU === "Users" ? "#295AA9" : "#8C94A1"} />
        </NavLink>
        <NavLink href='/investment' text='Investment'>
          <InvestmentIcon
            color={pathNameU === "Investment" ? "#295AA9" : "#8C94A1"}
          />
        </NavLink>
        <NavLink href='/savings' text='Savings'>
          <SavingsIcon
            color={pathNameU === "Savings" ? "#295AA9" : "#8C94A1"}
          />
        </NavLink>
        <NavLink href='/wallet' text='Wallet'>
          <WalletIcon color={pathNameU === "Wallet" ? "#295AA9" : "#8C94A1"} />
        </NavLink>
        <NavLink href='/admin' text='Admin'>
          <AdminIcon color={pathNameU === "Admin" ? "#295AA9" : "#8C94A1"} />
        </NavLink>
      </Stack>

      <Stack p='3'>
        <Divider />
        <Button
          leftIcon={<KeyIcon />}
          fontSize='16px'
          color='#8C94A1'
          variant='ghost'
          bgColor='transparent'
          _hover={{ bgColor: "transparent" }}>
          <Text w='full' textAlign='start'>
            Change Password
          </Text>
        </Button>
        <Button
          leftIcon={<LogoutIcon />}
          fontSize='16px'
          color='#8C94A1'
          variant='ghost'
          bgColor='transparent'
          _hover={{ bgColor: "transparent" }}>
          <Text w='full' textAlign='start'>
            Logout
          </Text>
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
