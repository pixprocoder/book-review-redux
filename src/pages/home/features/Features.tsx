import { Box, Grid, useBreakpointValue } from "@chakra-ui/react";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
  const displayItem = useBreakpointValue({
    base: 2,
    sm: 2,
    md: 3,
    lg: 4,
  });
  return (
    <Box my={30}>
      <h1>Features</h1>
      <Grid column={displayItem} gap={6}>
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
      </Grid>
    </Box>
  );
};

export default Features;
