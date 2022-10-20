import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Stack,
  Text,
  UseDisclosureProps,
} from "@chakra-ui/react";
import { useState } from "react";
import { ChevronDownIcon } from "./Svgs";
import { SingleUser } from "./types";

const CustomMenu = ({
  text,
  access: initialAccess,
}: {
  text: string;
  access: string;
}) => {
  const [access, setAccess] = useState(initialAccess);
  return (
    <Box>
      <Text
        fontSize='16px'
        color='#616976'
        letterSpacing='0.374px'
        lineHeight='19px'
        pb='2'>
        {text}
      </Text>
      <Menu>
        <MenuButton
          w='full'
          as={Button}
          rightIcon={<ChevronDownIcon />}
          textAlign='start'
          variant='solid'
          rounded='8px'
          size='lg'
          fontSize='20px'
          fontWeight='500'>
          {access}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => setAccess("Approved")}>Approved</MenuItem>
          <MenuItem onClick={() => setAccess("Pending")}>Pending</MenuItem>
          <MenuItem onClick={() => setAccess("In-review")}>In-review</MenuItem>
          <MenuItem onClick={() => setAccess("Denied")}>Denied</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

const StatusPopup = ({
  isOpen,
  onClose,
  userData,
}: {
  isOpen: boolean;
  onClose: () => void;
  userData: SingleUser;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      size='lg'
      onClose={onClose}
      isCentered
      motionPreset='slideInBottom'>
      <ModalContent rounded='lg'>
        <ModalHeader>Status</ModalHeader>
        <ModalCloseButton color=' #65ACB0' />
        <ModalBody as={Stack} spacing='4'>
          <CustomMenu text='Access' access={userData?.status?.access} />
          <CustomMenu
            text='Account information'
            access={userData?.status?.access}
          />
          <CustomMenu
            text='Investment profile'
            access={userData?.status?.access}
          />
          <CustomMenu
            text='Employment information'
            access={userData?.status?.access}
          />
          <CustomMenu
            text='Bio information'
            access={userData?.status?.access}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            size='md'
            bgColor='#295AA9'
            color='white'
            borderRadius='8px'
            onClick={onClose}>
            Update
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default StatusPopup;
