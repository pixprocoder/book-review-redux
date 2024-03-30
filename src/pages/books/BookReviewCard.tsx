import { StarIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

const BookReviewCard = ({ review }: any) => {
  let stars = [];
  for (let i = 1; i <= review.rating; i++) {
    stars.push(i);
  }

  return (
    <>
      <Card>
        <CardHeader display="flex" gap={2}>
          <Wrap>
            <WrapItem>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            </WrapItem>
          </Wrap>
          <Box display="flex" flexDirection="column">
            <Text as="b">{review?.userName}</Text>
            <Text fontSize="xs">{review?.address}</Text>
          </Box>
        </CardHeader>
        <CardBody py={0}>
          <Text>{review?.comment}</Text>
        </CardBody>
        <CardFooter display="flex" gap={2}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <small style={{ fontSize: "small" }}>{stars.length} out of 5</small>
            <Box>
              {stars.map((start) => (
                <StarIcon fontSize={15} color="#FFB802" key={start} />
              ))}
            </Box>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default BookReviewCard;
