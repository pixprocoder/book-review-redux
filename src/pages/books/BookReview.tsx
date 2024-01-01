import { Grid, Text, useBreakpointValue } from "@chakra-ui/react";
import BookReviewCard from "./BookReviewCard";
import { useSingleBookQuery } from "../../redux/api/apiSlice";

const BookReview = ({ id }: { id: String | undefined }) => {
  const { data } = useSingleBookQuery(id);

  const templateColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
    lg: "repeat(4, 1fr)",
  });

  return (
    <div>
      <Grid gridColumn={templateColumns} gap={4}>
        {data?.data?.reviews.length > 0 ? (
          data?.data?.reviews.map((review: any) => (
            <BookReviewCard key={review._id} review={review} />
          ))
        ) : (
          <>
            <Text>Sorry!! This book has no Review</Text>
          </>
        )}
      </Grid>
    </div>
  );
};

export default BookReview;
