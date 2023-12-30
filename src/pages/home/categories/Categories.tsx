import { Box, Grid, Text } from "@chakra-ui/react";
import SingleCategory from "./SingleCategory";

const Categories = () => {
  return (
    <Box my={30}>
      <Text fontSize="2xl">Categories</Text>
      <Grid gap={6} templateColumns="repeat(4, 1fr)">
        <SingleCategory />
        <SingleCategory />
        <SingleCategory />
        <SingleCategory />
      </Grid>
    </Box>
  );
};

export default Categories;
