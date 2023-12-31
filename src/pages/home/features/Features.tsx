import { Box, Grid, useBreakpointValue } from "@chakra-ui/react";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
  const templateColumns = useBreakpointValue({
    base: "1fr",
    sm: "repeat(2, 1fr)",
    md: "repeat(4, 1fr)",
  });
  return (
    <Box my={30}>
      <h1>Features</h1>
      <Grid templateColumns={templateColumns} gap={6}>
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
      </Grid>
    </Box>
  );
};

export default Features;
