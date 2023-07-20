/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Input,
} from "@chakra-ui/react";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";

function Login() {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email);
    console.log(password);
  };
  return (
    <section>
      <Box w="50%" bg="gray.50" p="10" mt="12" rounded="lg" mx="auto">
        <Center fontSize={33} textColor="blue.400" fontWeight="bold">
          Please Login
        </Center>
        <Box>
          <form onSubmit={handleLogin}>
            <FormControl>
              <FormLabel>Your Email *</FormLabel>
              <Input name="email" type="email" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Your Password *</FormLabel>
              <Input name="password" type="password" />
            </FormControl>
            <Button w="100%" mt="4" type="submit">
              Login
            </Button>
          </form>
          <Center my={2}>Or connect with</Center>
          <Box>
            <HStack display="flex" justifyContent="center">
              <Button colorScheme="twitter" leftIcon={<FaGoogle />}></Button>
              <Button colorScheme="twitter" leftIcon={<FaTwitter />}></Button>
              <Button colorScheme="twitter" leftIcon={<FaGithub />}></Button>
            </HStack>
          </Box>
        </Box>
      </Box>
    </section>
  );
}

export default Login;
