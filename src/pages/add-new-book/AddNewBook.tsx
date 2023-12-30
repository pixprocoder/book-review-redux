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
} from "@chakra-ui/react";

const AddNewBook = () => {
  return (
    <Box minH="90vh" display="flex" justifyContent="center" alignItems="center">
      <Card>
        <CardBody width="50vw">
          <Text fontSize="xl" fontWeight="bold" mb={4}>
            Add New Book
          </Text>
          <form>
            <FormControl mb={4}>
              <FormLabel>Title</FormLabel>
              <Input type="text" placeholder="Enter title" />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Author</FormLabel>
              <Input type="text" placeholder="Enter author" />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Genre</FormLabel>
              <Input type="text" placeholder="Enter genre" />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Image URL</FormLabel>
              <Input type="text" placeholder="Enter image URL" />
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
