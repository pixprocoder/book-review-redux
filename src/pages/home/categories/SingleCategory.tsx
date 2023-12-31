import { Box, Card, Stack, Text } from "@chakra-ui/react";

const SingleCategory = () => {
  return (
    <div>
      <Stack spacing="4">
        <Card variant="outline">
          <Box p={6}>
            <Text fontSize="2xl" mb={4} fontWeight="bold">
              Fantasy
            </Text>
            <Text fontSize="sm">300+ items</Text>
          </Box>
        </Card>
      </Stack>
    </div>
  );
};

export default SingleCategory;
