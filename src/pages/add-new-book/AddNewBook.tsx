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

const AddNewBook = () => {
  const toast = useToast();
  const titleRef = useRef<HTMLInputElement | null>(null);
  const authorRef = useRef<HTMLInputElement | null>(null);
  const genreRef = useRef<HTMLInputElement | null>(null);
  const imageRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const title = titleRef.current!.value;
    const author = authorRef.current!.value;
    const genre = genreRef.current!.value;
    const image = imageRef.current!.value;
    console.log(title, author, genre, image);

    // Reset form
    titleRef.current!.value = "";
    authorRef.current!.value = "";
    genreRef.current!.value = "";
    imageRef.current!.value = "";

    toast({
      title: `Book created Successfully`,
      position: "top",
      status: "success",
      isClosable: true,
    });
  };

  return (
    <Box minH="90vh" display="flex" justifyContent="center" alignItems="center">
      <Card>
        <CardBody width="50vw">
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Add New Book
          </Text>
          <form onSubmit={handleSubmit}>
            <FormControl mb={4}>
              <FormLabel>Title</FormLabel>
              <Input ref={titleRef} type="text" placeholder="Enter title" />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Author</FormLabel>
              <Input ref={authorRef} type="text" placeholder="Enter author" />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Genre</FormLabel>
              <Input type="text" ref={genreRef} placeholder="Enter genre" />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Image URL</FormLabel>
              <Input type="text" ref={imageRef} placeholder="Enter image URL" />
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
