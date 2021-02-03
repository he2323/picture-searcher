import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Box,
  List,
  ListItem,
} from "@chakra-ui/react";
import ListItemW from "./ListItemW";
interface InputQuaryI {
  value: string;
  tips: string[];
  changeValue: (value: string) => void;
  redirect: () => void;
  bg?: string;
  curlBorder?: boolean;
}
const InputQuery = ({
  bg,
  curlBorder,
  value,
  changeValue,
  tips,
  redirect,
}: InputQuaryI) => {
  return (
    <Box w="40vw">
      <InputGroup
        mt="4"
        w="100%"
        borderRadius={curlBorder ? "20px" : "5px"}
        border="1px solid rgb(235,235,235)"
      >
        <InputLeftElement color="grey" children={<FiSearch />} />
        <Input
          type="text"
          size="md"
          placeholder="Search free hight-resolution photos"
          borderRadius={curlBorder ? "20px" : "5px"}
          bgColor={bg ? bg : "white"}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            changeValue(e.currentTarget.value)
          }
          color="black"
          onKeyUp={(e: React.KeyboardEvent) => {
            if (e.key === "Enter" && value.length > 2) {
              redirect();
              console.log("enter");
            }
          }}
        />
        {value ? (
          <InputRightElement
            onClick={() => changeValue("")}
            children={<IoMdClose />}
            color="grey"
            cursor="pointer"
          />
        ) : null}
      </InputGroup>
      {value.length > 2 ? (
        <Box
          borderRadius="20px"
          pos="absolute"
          zIndex="1"
          mt="4px"
          bgColor="white"
          w="40vw"
        >
          <List>
            {tips.map((value: string, index: number) => (
              <ListItemW
                key={index}
                value={value}
                click={() => changeValue(value)}
              />
            ))}
            {tips.length < 1 && value.length > 2 ? (
              <ListItem color="black">Brak podpowiedzi</ListItem>
            ) : null}
          </List>
        </Box>
      ) : null}
    </Box>
  );
};

export default InputQuery;
