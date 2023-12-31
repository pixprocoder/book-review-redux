import { Box, Image, Text } from "@chakra-ui/react";

const SingleTrending = () => {
  return (
    <Box>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        mb="4"
      >
        <Image
          src="https://images.pexels.com/photos/4769488/pexels-photo-4769488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="img"
          w="100%"
          h="200px"
          objectFit="cover"
        />
        <Box p="4">
          <Text fontSize="sm" color="gray.500">
            since
          </Text>
          <Text fontSize="lg" fontWeight="semibold" mt="2">
            This is title
          </Text>
          <Text fontSize="md" color="gray.700" mt="2">
            Kobir
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleTrending;
