import { Box, Image, Text } from "@chakra-ui/react";

const BestBooksCard = ({ book }: any) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      mb="4"
    >
      <Image src={book.image} alt="img" w="100%" h="200px" objectFit="cover" />
      <Box p="4">
        <Text fontSize="sm" color="gray.500">
          {book.genre}
        </Text>
        <Text fontSize="lg" fontWeight="semibold" mt="2">
          {book.title}
        </Text>
        <Text fontSize="md" color="gray.700" mt="2">
          {book.author}
        </Text>
      </Box>
    </Box>
  );
};

export default BestBooksCard;
