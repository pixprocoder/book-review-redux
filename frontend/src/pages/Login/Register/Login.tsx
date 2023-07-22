/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import auth from "../../../lib/firebase/firebase.config";

function Login() {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email");
    const password = formData.get("password");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
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
          <Box
            display="flex"
            justifyContent="center"
            gap={2}
            alignItems="center"
          >
            <Center my={2}>Or connect with </Center>
            <Text textDecoration="underline" fontSize={12}>
              <Link to="/register">Please Register</Link>
            </Text>
          </Box>

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
