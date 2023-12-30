import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

const SingleCategory = () => {
  return (
    <div>
      <Stack spacing="4">
        <Card variant="outline">
          <CardHeader>
            <Heading size="md"> text</Heading>
          </CardHeader>
          <CardBody>
            <Text>variant text</Text>
          </CardBody>
        </Card>
      </Stack>
    </div>
  );
};

export default SingleCategory;
