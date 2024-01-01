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

const SingleRecentBookCard = ({ book }: any) => {
  return (
    <Card maxW="sm">
      <Link to={`/book-detail/${book._id}`}>
        <CardBody>
          <Box maxW="300px" m="auto">
            <Image
              boxSize="100%"
              src={book.image}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
          </Box>

          <Stack mt="6" spacing="3">
            <Heading size="md">{book.title}</Heading>
            <Text>
              Author:{" "}
              <span style={{ fontWeight: "semibold", color: "blue" }}>
                {book.author}
              </span>
            </Text>
            <Text>
              Genre:{" "}
              <span style={{ fontWeight: "semibold", color: "blue" }}>
                {book.genre}
              </span>
            </Text>
            <Text>
              Publication Year:
              <span style={{ fontWeight: "semibold", color: "blue" }}>
                {book.publicationDate}
              </span>
            </Text>
          </Stack>
        </CardBody>
      </Link>
    </Card>
  );
};

export default SingleRecentBookCard;
