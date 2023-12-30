import { StarIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

const BookReview = () => {
  return (
    <div>
      <Card>
        <CardHeader display="flex" gap={2}>
          <Wrap>
            <WrapItem>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            </WrapItem>
          </Wrap>
          <Box display="flex" flexDirection="column">
            <Text as="b">Kobir</Text>
            <Text fontSize="xs">Bangladesh</Text>
          </Box>
        </CardHeader>
        <CardBody py={0}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sunt
            esse rem nihil molestias eum perspiciatis, at iste accusantium
            laborum, quod veniam aliquid incidunt ullam qui repellat nemo
            pariatur magni?
          </Text>
        </CardBody>
        <CardFooter display="flex" gap={2}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </CardFooter>
      </Card>
    </div>
  );
};

export default BookReview;
