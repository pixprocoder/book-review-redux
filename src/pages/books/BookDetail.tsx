import { StarIcon } from "@chakra-ui/icons";
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
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useAddReviewMutation,
  useDeleteBookMutation,
  useSingleBookQuery,
} from "../../redux/api/apiSlice";
import { useAppSelector } from "../../redux/hooks/hooks";
import CustomLoading from "../shared/CustomLoading";
import BookDetailCard from "./BookDetailCard";
import BookReview from "./BookReview";

const BookDetail = () => {
  const { id } = useParams();
  const toast = useToast();
  const navigate = useNavigate();
  const reviewRef = useRef<any>(null);
  const [selectedRating, setSelectedRating] = useState(null);

  const [addReview] = useAddReviewMutation();

  const handleStarClick = (index: any) => {
    setSelectedRating(index + 1); // Assuming 1-based indexing for ratings
  };
  const { data, isLoading, isSuccess } = useSingleBookQuery(id);
  const { user } = useAppSelector((state) => state.auth);

  const [deleteBook] = useDeleteBookMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<null>(null);
  const handleConfirm = () => {
    deleteBook(id);
    if (isSuccess) {
      toast({
        title: `Book deleted Successfully`,
        position: "top",
        status: "success",
        isClosable: true,
      });
      navigate("/book");
    }
    onClose();
  };

  // handleReview
  const handleReview = () => {
    const review = reviewRef?.current!.value;
    if (selectedRating === null) {
      alert("you must select a rating");
    } else if (review === "") {
      alert("you must Write a Description");
    }

    toast({
      title: `Review added Successfully`,
      position: "top",
      status: "success",
      isClosable: true,
    });
    const option = [
      {
        comment: review,
        rating: selectedRating,
        address: "Romania",
        userName: user?.email,
        userPhotoURL: "random",
      },
    ];

    addReview({ id, data: option });

    reviewRef.current!.value = "";
  };

  let stars = [1, 2, 3, 4, 5];

  return (
    <Box minH="90vh">
      <Text textAlign="center" my={4} fontSize="xl" color="blue">
        {data?.data?.title}
      </Text>
      {/* Book detail card */}
      {isLoading ? (
        <CustomLoading />
      ) : (
        <Box display="flex" justifyContent="center" alignItems="center">
          <BookDetailCard data={data?.data} />
        </Box>
      )}

      {/* Action button */}
      {user?.email && (
        <Box display="flex" justifyContent="center" alignItems="center" mt={6}>
          <Button colorScheme="messenger" size="sm" ml={2}>
            <Link to="/edit-book">Edit</Link>
          </Button>
          <Button onClick={onOpen} colorScheme="red" size="sm" ml={2}>
            Delete
          </Button>
        </Box>
      )}

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

      {/* Review Form */}
      <Box>
        <Box>
          <Text mb="8px">
            Write Review to{" "}
            <span style={{ color: "blue" }}>{data?.data?.title}</span>
          </Text>

          <Box display="flex" gap={1} mb={2} fontSize="xs" cursor="pointer">
            {stars.map((start, index) => (
              <StarIcon
                color={index < selectedRating! ? "#FFB802" : "#848484"}
                key={start}
                onClick={() => handleStarClick(index)}
              />
            ))}
          </Box>
        </Box>
        <Textarea
          ref={reviewRef}
          placeholder="Here is a sample placeholder"
          size="sm"
        />
        <Button onClick={handleReview} colorScheme="messenger" size="sm" mt={2}>
          Post
        </Button>
      </Box>

      {/*  Reviews */}
      <Box my={20}>
        <Text fontSize="xl" mb={4}>
          This book has - review
        </Text>
        <Grid>
          <BookReview id={id} />
        </Grid>
      </Box>
    </Box>
  );
};

export default BookDetail;
