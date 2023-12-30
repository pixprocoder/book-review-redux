import { Box, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import BookDetailCard from "./BookDetailCard";

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
    </Box>
  );
};

export default BookDetail;
