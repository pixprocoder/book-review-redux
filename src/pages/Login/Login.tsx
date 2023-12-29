import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Input,
} from "@chakra-ui/react";

import {
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
  useSignInWithTwitter,
} from "react-firebase-hooks/auth";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import auth from "../../firebase/firebase.init";
import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { login } from "../../redux/features/auth/authSlice";

// import end
function Login() {
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithTwitter, tUser, tLoading, tError] =
    useSignInWithTwitter(auth);
  const [signInWithGithub, gitHubUser, gitHubLoading, gitHubError] =
    useSignInWithGithub(auth);

  const [signInWithEmailAndPassword, eUser, eLoading, eError] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get("email");
    const password = formData.get("password");
    signInWithEmailAndPassword(email as string, password as string);
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
              <Button
                onClick={() => signInWithGoogle()}
                colorScheme="twitter"
                leftIcon={<FaGoogle />}
              ></Button>
              <Button
                onClick={() => signInWithTwitter()}
                colorScheme="twitter"
                leftIcon={<FaTwitter />}
              ></Button>
              <Button
                onClick={() => signInWithGithub()}
                colorScheme="twitter"
                leftIcon={<FaGithub />}
              ></Button>
            </HStack>
          </Box>
        </Box>
      </Box>
    </section>
  );
}

export default Login;
