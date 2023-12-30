import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";

const FeaturesCard = () => {
  return (
    <>
      <Card maxW="sm" variant="filled">
        <CardBody border="none">
          <Image
            boxSize="50px"
            objectFit="cover"
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Living room Sofa</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default FeaturesCard;
