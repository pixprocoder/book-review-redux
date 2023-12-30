import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

function BookDetailCard() {
  return (
    <Card maxW="sm">
      <CardBody>
        <Box maxW="300px" m="auto">
          <Image
            boxSize="100%"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.VsAwMyJSxeMs3w9IHcpnuQHaD3%26pid%3DApi&f=1&ipt=1e415e1f050dfea0de29a617cc6111869aedb61ae212554db1a5b61813469152&ipo=images"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        </Box>

        <Stack mt="6" spacing="3">
          <Heading size="md">Title</Heading>
          <Text>Author: Kobir</Text>
          <Text>Genre: Since</Text>
          <Text>Publication Year: 2000</Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default BookDetailCard;
