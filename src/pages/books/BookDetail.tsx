import { Box, Button, Grid, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import BookDetailCard from "./BookDetailCard";
import BookReview from "./BookReview";

const BookDetail = () => {
  const { id } = useParams();
  return (
    <Box minH="90vh">
      <h1>Book Detail page for {id}</h1>
      <Box display="flex" justifyContent="center" alignItems="center">
        <BookDetailCard />
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" mt={6}>
        <Button colorScheme="messenger" size="sm" ml={2}>
          Edit
        </Button>
        <Button colorScheme="red" size="sm" ml={2}>
          Delete
        </Button>
      </Box>

      {/*  Reviews */}
      <Box my={20}>
        <Text fontSize="xl" mb={4}>
          This book has - review
        </Text>
        <Grid templateColumns="repeat(4, 1fr)" gridGap={6}>
          <BookReview />
        </Grid>
      </Box>
    </Box>
  );
};

export default BookDetail;
