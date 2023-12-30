import { Box, Grid, Text } from "@chakra-ui/react";
import SingleReviewCard from "./SingleReviewCard";

const Reviews = () => {
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
          Reviews
        </Text>
        <Text textAlign="center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
          iure et saepe mollitia vero, adipisci asperiores{" "}
        </Text>
      </Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <SingleReviewCard />
        <SingleReviewCard />
        <SingleReviewCard />
        <SingleReviewCard />
      </Grid>
    </Box>
  );
};

export default Reviews;
