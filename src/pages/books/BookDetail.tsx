import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Grid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import BookDetailCard from "./BookDetailCard";
import BookReview from "./BookReview";
import { useRef } from "react";

const BookDetail = () => {
  const { id } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<null>(null);
  const handleConfirm = () => {
    console.log("yes");

    onClose();
  };
  return (
    <Box minH="90vh">
      <h1>Book Detail page for {id}</h1>
      <Box display="flex" justifyContent="center" alignItems="center">
        <BookDetailCard />
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" mt={6}>
        <Button colorScheme="messenger" size="sm" ml={2}>
          <Link to="/edit-book">Edit</Link>
        </Button>
        <Button onClick={onOpen} colorScheme="red" size="sm" ml={2}>
          Delete
        </Button>
      </Box>

      {/* alert dialogue */}
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>
            The Book will be permanently deleted
          </AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to Delete title ?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button onClick={handleConfirm} colorScheme="red" ml={3}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

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