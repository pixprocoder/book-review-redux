import { Grid, GridItem, Text } from "@chakra-ui/react";
import "./App.css";
import TransitionExample from "./pages/test";

function App() {
  return (
    <>
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
          "2xl": "repeat(5, 1fr)",
        }}
        gap={6}
        mx={{ base: 2, sm: 0 }}
        justifyContent="center"
      >
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
        <GridItem w="100%" h="10" bg="blue.500" />
      </Grid>
      <Text
        bgGradient="linear(to-l, #7928CA, #ce3df3)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Welcome to Chakra UI
      </Text>
      <TransitionExample />
    </>
  );
}

export default App;
