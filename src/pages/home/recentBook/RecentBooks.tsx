import { Box, Grid, Text } from "@chakra-ui/react";
import SingleRecentBookCard from "./SingleRecentBookCard";

const RecentBooks = () => {
  return (
    <Box my={30}>
      <Text fontSize="2xl">Top 10 Recent Books</Text>
      <Grid gap={6} templateColumns="repeat(4, 1fr)">
        <SingleRecentBookCard />
        <SingleRecentBookCard />
        <SingleRecentBookCard />
        <SingleRecentBookCard />
      </Grid>
    </Box>
  );
};

export default RecentBooks;
