import { Box, Grid, useBreakpointValue } from "@chakra-ui/react";
import BestBooksCard from "./BestBooksCard";

const BestBooks = () => {
  const displayItem = useBreakpointValue({
    base: 2,
    sm: 2,
    md: 3,
    lg: 4,
  });
  return (
    <Box my={30}>
      <h1>Best Books</h1>
      <Grid gap={6} column={displayItem}>
        <BestBooksCard />
        <BestBooksCard />
        <BestBooksCard />
        <BestBooksCard />
      </Grid>
    </Box>
  );
};

export default BestBooks;
