import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

type Props = {
  id: number;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string;
};

function SingleBook({ id, title, publicationDate, image }: Props) {
  return (
    <Card maxW="sm">
      <Link to={`/book-detail/${id}`}>
        <CardBody>
          <Box maxW="300px" m="auto">
            <Image
              boxSize="100%"
              src={image}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
          </Box>

          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text>Author: Kobir</Text>
            <Text>Genre: Since</Text>
            <Text>Publication Year: {publicationDate}</Text>
          </Stack>
        </CardBody>
      </Link>
    </Card>
  );
}

export default SingleBook;
