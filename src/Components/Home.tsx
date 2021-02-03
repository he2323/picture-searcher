import { Flex, Heading, Text, Box, Spacer } from "@chakra-ui/react";

import InputQuary from "./InputQuary";
interface HomeI {
  redirect: () => void;
  quary: string;
  tips: string[];
  setQuary: (value: string) => void;
}
const Home = ({ quary, setQuary, tips, redirect }: HomeI) => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      direction="column"
      bgImage="url('https://images.unsplash.com/photo-1460627390041-532a28402358?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box alignItems="start" w="40vw" h="40vh" color="whiteSmoke">
        <Heading as="h1" size="2xl" mb="6">
          Unsplash
        </Heading>
        <Text fontWeight="600">
          The internet's source of{" "}
          <Text as="u" fontWeight="200">
            freely-usable images.
          </Text>
        </Text>
        <Text mb="6" fontWeight="500">
          Powered by creators everywhere.
        </Text>
        <Spacer />
        <InputQuary
          value={quary}
          changeValue={(value: string) => setQuary(value)}
          tips={tips}
          redirect={redirect}
        />
        <Spacer />
        <Flex direction="row" fontWeight="500">
          Trending:{" "}
          <Text fontWeight="200">
            flower, wallpapers, backgrounds, happy, love
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Home;
