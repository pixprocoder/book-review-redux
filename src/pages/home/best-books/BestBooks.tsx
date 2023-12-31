import { Box, Grid, Text, useBreakpointValue } from "@chakra-ui/react";
import BestBooksCard from "./BestBooksCard";
import { useGetBooksQuery } from "../../../redux/api/apiSlice";

const BestBooks = () => {
  const { data } = useGetBooksQuery(undefined);
  const filteredData = data?.data?.slice(0, 4) || [];
  const templateColumns = useBreakpointValue({
    base: "1fr",
    sm: "repeat(2, 1fr)",
    md: "repeat(4, 1fr)",
  });

  return (
    <Box my={30}>
      <Text fontSize="2xl" my={4} fontWeight="bold">
        Best Books
      </Text>
      <Grid gap={6} templateColumns={templateColumns}>
        {filteredData.map((book: any) => (
          <BestBooksCard key={book.title} book={book} />
        ))}
      </Grid>
    </Box>
  );
};

export default BestBooks;
