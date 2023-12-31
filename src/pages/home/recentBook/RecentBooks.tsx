import { Box, Grid, Text, useBreakpointValue } from "@chakra-ui/react";
import SingleRecentBookCard from "./SingleRecentBookCard";

const RecentBooks = () => {
  const displayItem = useBreakpointValue({
    base: 2,
    sm: 2,
    md: 3,
    lg: 4,
  });
  return (
    <Box my={30}>
      <Text fontSize="2xl">Top 10 Recent Books</Text>
      <Grid gap={6} column={displayItem}>
        <SingleRecentBookCard />
        <SingleRecentBookCard />
        <SingleRecentBookCard />
        <SingleRecentBookCard />
      </Grid>
    </Box>
  );
};

export default RecentBooks;
