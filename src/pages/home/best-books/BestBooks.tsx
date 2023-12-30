import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import BestBooksCard from "./BestBooksCard";

const BestBooks = () => {
  return (
    <Box my={30}>
      <h1>Best Books</h1>
      <Grid gap={6} templateColumns="repeat(4, 1fr)">
        <BestBooksCard />
        <BestBooksCard />
        <BestBooksCard />
        <BestBooksCard />
      </Grid>
    </Box>
  );
};

export default BestBooks;
