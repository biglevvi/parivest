import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { Loading } from "../../components/Loading";
import { ChevronDownIcon, FileIcon, SearchSmIcon } from "../../components/Svgs";
import { User } from "../../components/types";

const Users = () => {
  const router = useRouter();
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);

  const fetcher = async (args: string) => {
    // console.log(args);
    const res = await fetch(args);
    const result = await res.json();
    return result?.data;
  };
  const url = "https://parivest-mock-api.herokuapp.com/api/v1/users";

  const { data, error } = useSWR(
    `${url}?pageNo=${page}&limitNo=${limit}${
      filter === "In-review" ? "&access=in-review" : ""
    }`,
    fetcher
  );

  // console.log(data[0]);

  const localeDate = (date: string) => {
    const toDate = new Date(date);
    return toDate.toLocaleString("en", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  const statusColor = (access: string) => {
    switch (access) {
      case "Approved":
        return { bg: "#DEEDE5", color: "#5CA37B" };
      // break;
      case "Pending":
        return { bg: "#F8F2D4", color: "#DABC29" }; // break;
      case "In-review":
        return { bg: "#D4E2F8", color: "#296DDA" }; // break;

      default:
        return { bg: "#F8F2D4", color: "#DABC29" };
    }
  };

  // if (error) return <Heading textAlign='center'>failed to load data</Heading>;

  if (!data) return <Loading />;

  return (
    <Box rounded='lg' overflow='hidden' pb='2'>
      <Box bgColor='white' py='3' px='4'>
        <Flex>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              {filter}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => setFilter("All")}>All</MenuItem>
              <MenuItem onClick={() => setFilter("Approved")}>
                Approved
              </MenuItem>
              <MenuItem onClick={() => setFilter("Pending")}>Pending</MenuItem>
              <MenuItem onClick={() => setFilter("In-review")}>
                In-review
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Flex justify='space-between'>
          <HStack>
            <Text>From</Text>
            <input type='date' />
            <Text>To</Text>
            <input type='date' />
          </HStack>
          <HStack>
            <IconButton aria-label='file' bgColor='#5CA37B' p='1' rounded='4px'>
              <FileIcon />
            </IconButton>
            <InputGroup>
              <InputLeftElement>
                <SearchSmIcon />
              </InputLeftElement>
              <Input variant='flushed' placeholder='Search' size='xs' />
            </InputGroup>
          </HStack>
        </Flex>
      </Box>
      <Table mt='1'>
        <Thead bgColor='white'>
          <Tr>
            <Td color='#1B3C71' fontSize='16px'>
              Date Joined
            </Td>
            <Td color='#1B3C71' fontSize='16px'>
              User ID
            </Td>
            <Td color='#1B3C71' fontSize='16px'>
              Name
            </Td>
            <Td color='#1B3C71' fontSize='16px'>
              Email Address
            </Td>
            <Td color='#1B3C71' isNumeric>
              Phone no.
            </Td>
            <Td color='#1B3C71'>Status</Td>
            <Td color='#1B3C71'>Action</Td>
          </Tr>
        </Thead>
        <Tbody>
          {data &&
            data[0]?.data?.map((user: User) => (
              <Tr key={user._id}>
                <Td fontSize='14px'>{localeDate(user.createdAt)}</Td>
                <Td fontSize='14px' color='#1A8DD9'>
                  {user.client_id}
                </Td>
                <Td fontSize='14px'>{`${user.first_name}${" "}${
                  user?.last_name
                }`}</Td>
                <Td fontSize='14px'>{user.email}</Td>
                <Td fontSize='14px'>{user.phone}</Td>
                <Td
                  // as={Stack}
                  // bgColor='red'
                  p='2'
                  align='center'>
                  <Text
                    textAlign='center'
                    py='1'
                    // px='3'
                    w='95px'
                    fontSize='14px'
                    rounded='16px'
                    bgColor={statusColor(user.status.access).bg}
                    color={statusColor(user.status.access).color}>
                    {user.status.access}
                  </Text>
                </Td>
                <Link href={`users/${user._id}`}>
                  <Td cursor='pointer' color='#65ACB0'>
                    View
                  </Td>
                </Link>
              </Tr>
            ))}
        </Tbody>
      </Table>
      <Flex justify='end' pr='10' pt='6'>
        <Stack align='center'>
          <HStack>
            <Button
              bgColor='#7FBABD'
              disabled={page < 2}
              onClick={() => setPage((pageNo) => pageNo - 1)}
              fontWeight='400'
              color='white'
              rounded='4px'>
              Prev
            </Button>
            <Button
              disabled={!!(data && data[0]?.data?.length < limit)}
              bgColor='#7FBABD'
              onClick={() => setPage((pageNo) => pageNo + 1)}
              fontWeight='400'
              color='white'
              rounded='4px'>
              Next
            </Button>
          </HStack>
          <HStack>
            <Text>
              {data[0].data.length} of {data[0].metadata.total}
            </Text>
          </HStack>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Users;
