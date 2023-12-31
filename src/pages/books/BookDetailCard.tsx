import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

function BookDetailCard({ data }: any) {
  console.log("data is: ", data);
  return (
    <Card>
      <CardBody minW="50vw">
        <Box maxW="50vw" m="auto">
          <Image boxSize="100%" src={data?.image} borderRadius="lg" />
        </Box>

        <Stack mt="6" spacing="3">
          <Heading size="md">{data?.title}</Heading>
          <Text>
            Author:{" "}
            <span style={{ fontWeight: "semibold", color: "blue" }}>
              {data?.author}
            </span>
          </Text>
          <Text>
            Genre:{" "}
            <span style={{ fontWeight: "semibold", color: "blue" }}>
              {data?.genre}
            </span>
          </Text>
          <Text>
            Publication Year:
            <span style={{ fontWeight: "semibold", color: "blue" }}>
              {data?.publicationDate}
            </span>
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default BookDetailCard;
