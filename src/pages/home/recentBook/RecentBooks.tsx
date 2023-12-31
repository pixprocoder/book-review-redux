import { Box, Grid, Text, useBreakpointValue } from "@chakra-ui/react";
import SingleRecentBookCard from "./SingleRecentBookCard";

const RecentBooks = () => {
  const templateColumns = useBreakpointValue({
    base: "1fr",
    sm: "repeat(2, 1fr)",
    md: "repeat(5, 1fr)",
  });
  return (
    <Box my={30}>
      <Text fontSize="2xl">Top 10 Recent Books</Text>
      <Grid gap={6} templateColumns={templateColumns}>
        <SingleRecentBookCard />
        <SingleRecentBookCard />
        <SingleRecentBookCard />
        <SingleRecentBookCard />
        <SingleRecentBookCard />
        <SingleRecentBookCard />
        <SingleRecentBookCard />
        <SingleRecentBookCard />
        <SingleRecentBookCard />
        <SingleRecentBookCard />
      </Grid>
    </Box>
  );
};

export default RecentBooks;
