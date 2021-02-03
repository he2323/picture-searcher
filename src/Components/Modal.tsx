import {
  Box,
  Flex,
  Tag,
  useDisclosure,
  Modal as Mod,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Avatar,
  Text,
  Spacer
} from "@chakra-ui/react";
import React from "react";
import { PhotoI, TagI } from "../Containers/Photos";
import Photo from "./Photo";
interface ModalI {
  photo: PhotoI;
}
const Modal = ({ photo }: ModalI) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box onClick={onOpen} cursor="pointer">
        <img src={photo.urls.small} alt={photo.alt_description} />
        <Flex direction="row">
          {photo.tags.map((tag: TagI) => (
            <Tag bg="gray.400" mr="1">
              {tag.title}
            </Tag>
          ))}
        </Flex>
      </Box>
      <Mod isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader><Flex direction="row"><Avatar name={photo.user.name} src={photo.user.profile_image.small}/> <Text>{photo.user.name}</Text></Flex></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <img src={photo.urls.regular} alt={photo.alt_description} />
          </ModalBody>

          <ModalFooter>
              <Text>{photo.user.location}</Text><Spacer />
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Mod>
    </>
  );
};

export default Modal;
