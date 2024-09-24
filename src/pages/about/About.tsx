import { Box, Heading, Text, Flex, Avatar, Stack, VStack, Divider } from "@chakra-ui/react";

const AboutUs = () => {
    const teamMembers = [
        {
            name: "John Doe",
            position: "Founder & CEO",
            image: "https://via.placeholder.com/150",
            bio: "John has over 10 years of experience in the tech industry and leads the company with a passion for innovation.",
        },
        {
            name: "Jane Smith",
            position: "Chief Marketing Officer",
            image: "https://via.placeholder.com/150",
            bio: "Jane is a marketing expert with a focus on building brands and creating unique customer experiences.",
        },
        {
            name: "Mike Johnson",
            position: "Head of Product",
            image: "https://via.placeholder.com/150",
            bio: "Mike has been involved in product development for over a decade, with a keen focus on customer-centric design.",
        },
    ];

    return (
        <Box maxW="7xl" mx="auto" px={4} py={8}>
            {/* Main Heading */}
            <Heading as="h1" size="2xl" textAlign="center" mb={8}>
                About Us
            </Heading>

            {/* Intro Section */}
            <VStack spacing={4} align="center" maxW="3xl" mx="auto" mb={16}>
                <Text fontSize="lg" textAlign="center">
                    We are a team of passionate individuals who believe in delivering high-quality products and services to our
                    clients. Our mission is to create innovative solutions that meet the needs of our users and drive positive
                    change in the world.
                </Text>
                <Divider width="50%" />
            </VStack>

            {/* Mission Section */}
            <VStack spacing={4} align="center" maxW="5xl" mx="auto" mb={16}>
                <Heading as="h2" size="lg" mb={4}>
                    Our Mission
                </Heading>
                <Text fontSize="md" textAlign="center">
                    Our mission is to leverage technology to solve real-world problems and make a meaningful impact. We strive to
                    create user-friendly products that make people’s lives easier, while also promoting a culture of innovation,
                    collaboration, and continuous learning.
                </Text>
            </VStack>

            {/* Team Section */}
            <Heading as="h2" size="lg" textAlign="center" mb={8}>
                Meet Our Team
            </Heading>

            <Flex justify="center" wrap="wrap" gap={8}>
                {teamMembers.map((member, index) => (
                    <Box key={index} maxW="sm" bg="white" rounded="lg" shadow="lg" p={6} textAlign="center">
                        <Avatar size="xl" name={member.name} src={member.image} mb={4} />
                        <Heading as="h3" size="md" mb={2}>
                            {member.name}
                        </Heading>
                        <Text fontSize="sm" color="gray.500" mb={4}>
                            {member.position}
                        </Text>
                        <Text fontSize="sm" color="gray.600">
                            {member.bio}
                        </Text>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export default AboutUs;