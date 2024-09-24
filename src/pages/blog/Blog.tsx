import {Box, Grid, Heading,} from "@chakra-ui/react";
import {BlogPosts} from "../../constant";
import BlogCard from "./BlogCard.tsx";

const Blog = () => {
  return (
      <Box maxW="7xl" mx="auto" px={4} py={8}>
        <Heading as="h1" size="xl" fontWeight="bold" mb={8}>
          Latest Blog Posts
        </Heading>
        <Grid
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
            gap={8}
        >
          {BlogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
          ))}
        </Grid>
      </Box>
  );
};

export default Blog;
