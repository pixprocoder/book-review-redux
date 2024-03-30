import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Input,
} from "@chakra-ui/react";

import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";

// import end
function Login() {
  const navigate = useNavigate();
  const { user, isLoading } = useAppSelector((state) => state.auth);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;
    dispatch(loginUser({ email, password }));
  
    if (user?.email && !isLoading) {
      navigate("/");
    }

    // reset form
    emailRef.current!.value = "";
    passwordRef.current!.value = "";
  };
  return (
    <Box minH="90vh" display="flex" justifyContent="center" alignItems="center">
      <Box w="50%" bg="gray.50" p="10" mt="12" rounded="lg" mx="auto">
        <Center fontSize={33} textColor="blue.400" fontWeight="bold">
          Please Login
        </Center>
        <Box>
          <form onSubmit={handleLogin}>
            <FormControl>
              <FormLabel>Your Email *</FormLabel>
              <Input name="email" ref={emailRef} type="email" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Your Password *</FormLabel>
              <Input name="password" ref={passwordRef} type="password" />
            </FormControl>
            <Box my={2} fontSize="xs">
              New to here?{" "}
              <Button fontSize="xs" colorScheme="messenger" variant="link">
                <Link to="/register"> Please Register </Link>
              </Button>
            </Box>
            <Button colorScheme="messenger" w="100%" mt="4" type="submit">
              Login
            </Button>
          </form>
          {/* <Box>
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
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
