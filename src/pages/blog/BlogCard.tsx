import { useState } from "react";
import { FaHeart, FaArrowRight } from 'react-icons/fa';
import { Box, Image, Text, Heading, Avatar, Button, Tag, HStack, Flex, VStack, IconButton } from '@chakra-ui/react';
import {Link} from "react-router-dom";



const BlogPostCard = ({ post }: { post: any }) => {
    const [liked, setLiked] = useState(false);

    // @ts-ignore
    return (
        <Box
            bg="white"
            rounded="lg"
            shadow="md"
            overflow="hidden"
            transition="all 0.3s"
            _hover={{ shadow: "lg" }}
        >
            <Image
                src={post.imageUrl}
                alt={post.title}
                width="100%"
                height="12rem"
                objectFit="cover"
            />
            <Box p={6}>
                <Heading as="h2" size="lg" mb={2}>
                    {post.title}
                </Heading>
                <Flex align="center" mb={4}>
                    <Avatar src={post.authorAvatar} alt={post.author} size="md" mr={4} />
                    <VStack align="start" spacing={0}>
                        <Text fontWeight="bold" fontSize="sm">{post.author}</Text>
                        <Text fontSize="xs" color="gray.500">{post.date}</Text>
                    </VStack>
                </Flex>
                <Text color="gray.700" mb={4}>
                    {post.excerpt}
                </Text>
                <HStack spacing={2} mb={4} wrap="wrap">
                    {post.tags.map((tag: any, index: number) => (
                        <Tag
                            key={index}
                            bg="gray.200"
                            color="gray.700"
                            size="sm"
                            px={2}
                            py={1}
                            borderRadius="full"
                            mb={2}
                        >
                            {tag}
                        </Tag>
                    ))}
                </HStack>
                <Flex justify="space-between" align="center">
                    <Link to={`/blog/${post?.id}`}>
                        <Button
                            rightIcon={<FaArrowRight />}
                            colorScheme="blue"
                            variant="link"
                            aria-label="Read more about this post"
                            _hover={{ textDecoration: 'none', transform: 'translateY(-2px)' }}
                        >
                            Read More
                        </Button>
                    </Link>
                    <IconButton
                        onClick={() => setLiked(!liked)}
                        icon={<FaHeart />}
                        aria-label={liked ? 'Unlike this post' : 'Like this post'}
                        size="lg"
                        color={liked ? 'red.500' : 'gray.400'}
                        variant="ghost"
                        _focus={{ ring: 2, ringColor: 'red.500', ringOpacity: 0.5 }}
                    />
                </Flex>
            </Box>
        </Box>
    );
};

export default BlogPostCard;