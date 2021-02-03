import React from "react";
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
import { queryAllByRole } from "@testing-library/react";
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
      <InputGroup mt="4">
        <InputLeftElement color="grey" children="$" />
        <Input
          type="text"
          size="md"
          placeholder="Search free hight-resolution photos"
          borderRadius={curlBorder ? "xl" : "none"}
          bgColor={bg ? bg : "white"}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            changeValue(e.currentTarget.value)
          }
          color="grey"
          isRequired={true}
          onKeyUp={(e: React.KeyboardEvent) => {
            if (e.key === "Enter" && value.length > 2) {
              redirect();
              console.log("enter");
            }
          }}
        />
        <InputRightElement
          onClick={() => changeValue("")}
          children="X"
          color="grey"
          cursor="pointer"
        />
      </InputGroup>
      {value.length > 2 ? (
        <Box
          borderRadius="5px"
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
