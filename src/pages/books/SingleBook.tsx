import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

type Props = {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  image: string;
};

function SingleBook({ title, publicationDate, image }: Props) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Box maxW="200px" m="auto">
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
    </Card>
  );
}

export default SingleBook;
