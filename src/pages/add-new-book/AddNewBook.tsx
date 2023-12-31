import {
  Box,
  Button,
  Card,
  CardBody,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useAddBookMutation } from "../../redux/api/apiSlice";
import { useAppSelector } from "../../redux/hooks/hooks";
import { useNavigate } from "react-router-dom";

const AddNewBook = () => {
  const toast = useToast();
  const titleRef = useRef<HTMLInputElement | null>(null);
  const authorRef = useRef<HTMLInputElement | null>(null);
  const genreRef = useRef<HTMLInputElement | null>(null);
  const imageRef = useRef<HTMLInputElement | null>(null);
  const publicationRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const [addBook, { isLoading, isSuccess }] = useAddBookMutation();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const title = titleRef.current!.value;
    const author = authorRef.current!.value;
    const genre = genreRef.current!.value;
    const image = imageRef.current!.value;
    const publicationDate = publicationRef.current!.value;

    const formData = {
      title,
      author,
      genre,
      image,
      publicationDate,
    };

    addBook({ formData });

    // Reset form
    titleRef.current!.value = "";
    authorRef.current!.value = "";
    genreRef.current!.value = "";
    imageRef.current!.value = "";
    publicationRef.current!.value = "";

    if (isSuccess) {
      toast({
        title: `Book created Successfully`,
        position: "top",
        status: "success",
        isClosable: true,
      });
      navigate("/book");
    }
  };

  return (
    <Box minH="90vh" display="flex" justifyContent="center" alignItems="center">
      <Card>
        <CardBody width={["90vw", "50vw"]}>
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Add New Book
          </Text>
          <form onSubmit={handleSubmit}>
            <FormControl mb={4}>
              <FormLabel>Title</FormLabel>
              <Input
                required
                ref={titleRef}
                type="text"
                placeholder="Enter title"
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Author</FormLabel>
              <Input
                required
                ref={authorRef}
                type="text"
                placeholder="Enter author"
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Genre</FormLabel>
              <Input
                required
                type="text"
                ref={genreRef}
                placeholder="Enter genre"
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Publication Date</FormLabel>
              <Input
                required
                type="text"
                ref={publicationRef}
                placeholder="Enter Publication Date"
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Image URL</FormLabel>
              <Input
                required
                type="text"
                ref={imageRef}
                placeholder="Enter image URL"
              />
              <FormHelperText>
                Provide a URL for the book cover image.
              </FormHelperText>
            </FormControl>
            <Button colorScheme="messenger" type="submit">
              Add Book
            </Button>
          </form>
        </CardBody>
      </Card>
    </Box>
  );
};

export default AddNewBook;
