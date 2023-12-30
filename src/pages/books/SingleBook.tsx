import {
  Card,
  CardBody,
  Divider,
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
    </Card>
  );
}

export default SingleBook;
