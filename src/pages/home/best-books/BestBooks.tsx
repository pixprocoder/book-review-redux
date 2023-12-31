import { Box, Grid, useBreakpointValue } from "@chakra-ui/react";
import BestBooksCard from "./BestBooksCard";

const BestBooks = () => {
  const templateColumns = useBreakpointValue({
    base: "1fr",
    sm: "repeat(2, 1fr)",
    md: "repeat(4, 1fr)",
  });

  return (
    <Box my={30}>
      <h1>Best Books</h1>
      <Grid gap={6} templateColumns={templateColumns}>
        <BestBooksCard />
        <BestBooksCard />
        <BestBooksCard />
        <BestBooksCard />
      </Grid>
    </Box>
  );
};

export default BestBooks;
