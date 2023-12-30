import { Box, Grid, Text } from "@chakra-ui/react";
import SingleTrending from "./SingleTrending";

const TrendingBook = () => {
  return (
    <Box my={20}>
      <Box mb={5}>
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="3xl"
          fontWeight="extrabold"
          textAlign="center"
        >
          Trending This week
        </Text>
        <Text textAlign="center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
          iure et saepe mollitia vero, adipisci asperiores{" "}
        </Text>
      </Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <SingleTrending />
        <SingleTrending />
        <SingleTrending />
        <SingleTrending />
      </Grid>
    </Box>
  );
};

export default TrendingBook;
