import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment, FaShare } from "react-icons/fa";

type Props = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string;
};

function SingleBook({ title, author, genre, publicationDate, image }: Props) {
  console.log(title, author, genre, publicationDate, image);
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
          <Text color="blue.600" fontSize="2xl">
            Publication Date: {publicationDate}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <Box px={6} py={4}>
        <ButtonGroup display="flex" justifyContent="space-between">
          <Button variant="solid" colorScheme="gray">
            <AiFillHeart />
          </Button>
          <Button variant="solid" colorScheme="gray">
            <FaShare />
          </Button>
          <Button variant="solid" colorScheme="gray">
            <FaComment />
          </Button>
        </ButtonGroup>
      </Box>
    </Card>
  );
}

export default SingleBook;
