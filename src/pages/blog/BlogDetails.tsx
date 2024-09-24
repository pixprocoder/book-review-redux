import { Box, Heading, Text, Image, Avatar, HStack, VStack, Button, Flex, IconButton } from "@chakra-ui/react";
import { FaHeart, FaShareAlt } from "react-icons/fa";
import { useState } from "react";

const BlogDetails = ({ post }) => {
    const [liked, setLiked] = useState(false);

    return (
        <Box maxW="7xl" mx="auto" px={4} py={8}>
            {/* Blog Header Image */}
            <Image
                src={post?.imageUrl}
                alt={post?.title}
                borderRadius="lg"
                mb={8}
                w="100%"
                h={{ base: "300px", md: "500px" }}
                objectFit="cover"
            />

            {/* Blog Title */}
            <Heading as="h1" size="2xl" mb={4} textAlign="center">
                {post?.title}
            </Heading>

            {/* Blog Meta Information (Author and Date) */}
            <Flex justify="center" align="center" mb={8}>
                <Avatar src={post?.authorAvatar} name={post?.author} size="md" mr={4} />
                <VStack align="start">
                    <Text fontWeight="bold" fontSize="md">{post?.author}</Text>
                    <Text fontSize="sm" color="gray.500">{post?.date}</Text>
                </VStack>
            </Flex>

            {/* Blog Content */}
            <Box maxW="5xl" mx="auto" mb={16}>
                <Text fontSize="lg" lineHeight="tall" color="gray.700">
                    {post?.content}
                </Text>
            </Box>

            {/* Blog Tags */}
            <HStack justify="center" spacing={4} mb={8}>
                {post?.tags.map((tag, index) => (
                    <Button key={index} size="sm" bg="gray.200" color="gray.700" borderRadius="full">
                        {tag}
                    </Button>
                ))}
            </HStack>

            {/* Like and Share Buttons */}
            <Flex justify="center" align="center" mb={8}>
                <IconButton
                    onClick={() => setLiked(!liked)}
                    icon={<FaHeart />}
                    color={liked ? "red.500" : "gray.400"}
                    variant="ghost"
                    fontSize="2xl"
                    mr={4}
                    aria-label="Like post"
                />
                <IconButton
                    icon={<FaShareAlt />}
                    color="gray.400"
                    variant="ghost"
                    fontSize="2xl"
                    aria-label="Share post"
                />
            </Flex>

            {/* Call to Action */}
            <Flex justify="center" mt={16}>
                <Button colorScheme="blue" size="lg">
                    Read More Blog Posts
                </Button>
            </Flex>
        </Box>
    );
};

export default BlogDetails;