import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { createUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks/hooks";
// import end

function Register() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current!.value;
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;
    console.log(name);

    dispatch(createUser({ email, password }));

    // reset form
    nameRef.current!.value = "";
    emailRef.current!.value = "";
    passwordRef.current!.value = "";
  };
  return (
    <Box minH="90vh" display="flex" justifyContent="center" alignItems="center">
      <Box w="50%" bg="gray.50" p="10" mt="12" rounded="lg" mx="auto">
        <Center fontSize={33} textColor="blue.400" fontWeight="bold">
          Please Register
        </Center>
        <Box>
          <form onSubmit={handleRegister}>
            <FormControl>
              <FormLabel>Your Name *</FormLabel>
              <Input name="name" ref={nameRef} type="text" />
            </FormControl>
            <FormControl>
              <FormLabel mt={4}>Your Email *</FormLabel>
              <Input name="email" ref={emailRef} type="email" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Your Password *</FormLabel>
              <Input
                id="password"
                ref={passwordRef}
                name="password"
                type="password"
              />
            </FormControl>
            <Box my={2} fontSize="xs">
              Already Have an Account?{" "}
              <Button fontSize="xs" colorScheme="messenger" variant="link">
                <Link to="/login"> Please Login </Link>
              </Button>
            </Box>
            <Button colorScheme="messenger" w="100%" mt="4" type="submit">
              Register
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

export default Register;
