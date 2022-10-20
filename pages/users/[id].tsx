import {
  Avatar,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Stack,
  Table,
  Td,
  Text,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
// import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import useSWR from "swr";
import { Loading } from "../../components/Loading";
import StatusPopup from "../../components/StatusPopup";
import { ArrowLetfIcon } from "../../components/Svgs";
import { SingleUser } from "../../components/types";

const UserPage = () => {
  const router = useRouter();
  const uploadRef = useRef<HTMLInputElement>(null);
  const url = "https://parivest-mock-api.herokuapp.com/api/v1/users";

  const fetcher = async (args: string) => {
    // console.log(args);
    const res = await fetch(args);
    const result = await res.json();
    return result?.data;
  };

  const { data, error } = useSWR<SingleUser>(
    `${url}/single?id=${router.query?.id}`,
    fetcher
  );

  // console.log(data.name);

  const { isOpen, onOpen, onClose } = useDisclosure();

  // if (error) return <Heading textAlign='center'>failed to load data</Heading>;

  if (!data) return <Loading />;

  return (
    <>
      <Box
        rounded='lg'
        overflow='hidden'
        px='4'
        pb='4'
        bgColor='white'
        overflowY='auto'>
        <Flex bgColor='white' justify='space-between' px='2' py='4'>
          <HStack spacing='0'>
            <IconButton
              aria-label='back to users'
              onClick={() => router.push("/users")}>
              <ArrowLetfIcon />
            </IconButton>
            <Text
              color='#295AA9'
              fontWeight='700'
              fontSize='24px'
              lineHeight='25px'>
              {data?.name}
            </Text>
          </HStack>
          <Button
            fontWeight='400'
            fontSize='14px'
            color='#295AA9'
            h='48px'
            bgColor='#E7EEF9'
            rounded='4px'
            onClick={() => onOpen()}>
            View profile status
          </Button>
          <StatusPopup isOpen={isOpen} onClose={onClose} userData={data} />
        </Flex>
        <Divider />
        <Avatar src={data.image} width='64px' height='64px' m='3' />
        <Text px='4' py='2' fontWeight='600' color='#295AA9'>
          Account Details
        </Text>
        <HStack px='3' spacing='10'>
          <Box pt='3' textAlign='start'>
            <Text color='#616976' fontSize='16px'>
              User ID
            </Text>
            <Text color='#081222' fontSize='20px'>
              {data.client_id}
            </Text>
          </Box>
          <Box>
            <Text color='#616976' fontSize='16px'>
              First name
            </Text>
            <Text color='#081222' fontSize='20px'>
              {data.first_name}
            </Text>
          </Box>
          <Box>
            <Text color='#616976' fontSize='16px'>
              Last name
            </Text>
            <Text color='#081222' fontSize='20px'>
              {data.last_name}
            </Text>
          </Box>
          <Box>
            <Text color='#616976' fontSize='16px'>
              Email Address
            </Text>
            <Text color='#081222' fontSize='20px'>
              {data.email}
            </Text>
          </Box>
        </HStack>

        <Divider />
        <Text px='4' py='5' fontWeight='600' color='#295AA9'>
          Investment Profile
        </Text>
        <HStack flexWrap='wrap' spacing='10' px='3' textAlign='start'>
          <Box>
            <Text color='#616976' fontSize='16px'>
              Account income
            </Text>
            <Text color='#081222' fontSize='20px'>
              {data.employment.annual_income}
            </Text>
          </Box>
          <Box>
            <Text color='#616976' fontSize='16px'>
              Investment goal
            </Text>
            <Text color='#081222' fontSize='20px'>
              {data.investment.goal}
            </Text>
          </Box>
          <Box>
            <Text color='#616976' fontSize='16px'>
              Investment experience
            </Text>
            <Text color='#081222' fontSize='20px'>
              {data.investment.experience}
            </Text>
          </Box>
          <Box>
            <Text color='#616976' fontSize='16px'>
              Marital status
            </Text>
            <Text color='#081222' fontSize='20px'>
              {data.investment.marital_status}
            </Text>
          </Box>
          <Box>
            <Text color='#616976' fontSize='16px'>
              Next of kin name
            </Text>
            <Text color='#081222' fontSize='20px'>
              {data.investment.next_of_kin_name}
            </Text>
          </Box>
        </HStack>
        <HStack px='3' pt='5' spacing='10'>
          <Box textAlign='start'>
            <Text color='#616976' fontSize='16px'>
              Next of kin phone
            </Text>
            <Text color='#081222' fontSize='20px'>
              {data.investment.next_of_kin_phone}
            </Text>
          </Box>
          <Box>
            <Text color='#616976' fontSize='16px'>
              Next of kin email
            </Text>
            <Text color='#081222' fontSize='20px'>
              {data.investment.next_of_kin_email}
            </Text>
          </Box>
          <Box>
            <Text color='#616976' fontSize='16px'>
              Next of kin relationship
            </Text>
            <Text color='#081222' fontSize='20px'>
              {data.investment.next_of_kin_relationship}
            </Text>
          </Box>
        </HStack>
        <Divider />
        <Text px='4' py='5' fontWeight='600' color='#295AA9'>
          Document upload
        </Text>
        <Center
          as={Button}
          w='full'
          bgColor='#F3F6FC'
          h='153px'
          rounded='md'
          m='2'
          onClick={() => uploadRef?.current?.click()}>
          <Box textAlign='center'>
            <Text fontWeight='500' fontSize='20px' color='#437F82'>
              Document.pdf
            </Text>
            <Text fontWeight='400' fontSize='14px' color='#3A3F47'>
              Tap to view uploaded document
            </Text>
          </Box>
        </Center>
        <input ref={uploadRef} type='file' hidden />
      </Box>
      <Box></Box>
    </>
  );
};

export default UserPage;
