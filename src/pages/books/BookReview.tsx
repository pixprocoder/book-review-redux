import { Grid, useBreakpointValue } from "@chakra-ui/react";
import BookReviewCard from "./BookReviewCard";

const BookReview = () => {
  const templateColumns = useBreakpointValue({
    base: "1fr",
    sm: "repeat(2, 1fr)",
    md: "repeat(4, 1fr)",
  });

  return (
    <div>
      <Grid gridColumn={templateColumns} gap={4}></Grid>
      <BookReviewCard />
    </div>
  );
};

export default BookReview;
