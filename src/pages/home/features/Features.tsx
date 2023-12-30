import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
  return (
    <Box my={30}>
      <h1>Features</h1>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
        <FeaturesCard />
      </Grid>
    </Box>
  );
};

export default Features;
