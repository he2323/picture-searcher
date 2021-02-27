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
  Image,
  Avatar,
  Text,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { FaHeart, FaShare, FaInfoCircle } from "react-icons/fa";
import { GoPlusSmall } from "react-icons/go";
import {ImLocation2} from "react-icons/im"
import React from "react";
import { PhotoI, TagI } from "../Containers/Photos";
interface ModalI {
  photo: PhotoI;
}
const Modal = ({ photo }: ModalI) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box onClick={onOpen} cursor="pointer">
        <img src={photo.urls.small} alt={photo.alt_description} />
        <Flex direction="row" wrap="wrap" mt="4px" mb="2px">
          {photo.tags.map((tag: TagI, index: number) => (
            <Tag key={index} bg="rgb(235,235,235)" mr="1" mb="4px">
              {tag.title}
            </Tag>
          ))}
        </Flex>
      </Box>
      <Mod isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex direction="row">
              <Avatar
                name={photo.user.name}
                src={photo.user.profile_image.small}
                size="md"
              />
              <Text m="9px">{photo.user.name}</Text>
              <Spacer />
              <Button mr="15px">
                <FaHeart />
              </Button>
              <Button>
                <GoPlusSmall />
              </Button>
            </Flex>
          </ModalHeader>
          <ModalBody>
            <Image
              m="0 auto"
              boxSize="xl"
              objectFit="cover"
              src={photo.urls.regular}
              alt={photo.alt_description}
            />
          </ModalBody>

          <ModalFooter>
            <Text fontWeight="600">
              {photo.user.location ? (<Flex direction="row"><ImLocation2/>{photo.user.location}</Flex>) : "no location"}
            </Text>
            <Spacer />
            <Button mr="7px"><FaShare /><Text p="4px">Share</Text></Button>
            <Button><FaInfoCircle /><Text p="4px">Info</Text></Button>

          </ModalFooter>
        </ModalContent>
      </Mod>
    </>
  );
};

export default Modal;
