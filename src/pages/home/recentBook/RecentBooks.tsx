import { Box, Grid, Text, useBreakpointValue } from "@chakra-ui/react";
import { useGetBooksQuery } from "../../../redux/api/apiSlice";
import SingleRecentBookCard from "./SingleRecentBookCard";

const RecentBooks = () => {
  const { data } = useGetBooksQuery(undefined);

  const recentData = data?.data?.slice(0, 10) || [];

  const templateColumns = useBreakpointValue({
    base: "1fr",
    sm: "repeat(2, 1fr)",
    md: "repeat(5, 1fr)",
  });
  return (
    <Box my={30}>
      <Text fontSize="2xl" my={4} fontWeight="bold">
        Top 10 Recent Books
      </Text>
      <Grid gap={6} templateColumns={templateColumns}>
        {recentData.map((book: any) => (
          <SingleRecentBookCard key={book.title} book={book} />
        ))}
      </Grid>
    </Box>
  );
};

export default RecentBooks;
