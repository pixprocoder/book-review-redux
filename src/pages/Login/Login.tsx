import {Box, Button, Center, FormControl, FormLabel, HStack, Input, Text} from "@chakra-ui/react";


import {Link, useNavigate} from "react-router-dom";
import {loginUser} from "../../redux/features/auth/authSlice";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {useForm} from "react-hook-form";

// import end
function Login() {
  const navigate = useNavigate();
  const { user, isLoading } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  // handling Form
  const { register, handleSubmit, formState: { errors } , reset} = useForm();
  const onSubmit = (data : any) => {
    const {email,  password} = data;
    dispatch(loginUser({ email, password }));
    reset()
    if (user?.email && !isLoading) {
      navigate("/");
    }
  };

  return (
    <Box minH="90vh" display="flex" justifyContent="center" alignItems="center">
      <Box w={{ base: "100%", md: "50%" }} bg="gray.50" p="10" mt="12" rounded="lg" mx="auto">
        <Center fontSize={33} textColor="blue.400" fontWeight="bold">
          Please Login
        </Center>
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>Your Email *</FormLabel>
              <Input
                  {...register("email", {required: true})}
                  aria-invalid={errors.email ? "true" : "false"}
                  name="email"  type="email" />
              {errors.email?.type === 'required' && (
                  <Text fontSize="xs" role="alert" color="red.500">
                    Email is required
                  </Text>
              )}
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Your Password *</FormLabel>
              <Input
                  {...register("password", {required: true})}
                  aria-invalid={errors.password ? "true" : "false"}
                  name="password" type="password" />
              {errors.password?.type === 'required' && (
                  <Text
                      fontSize="xs"
                      role="alert" color="red.500">
                    Password is required
                  </Text>
              )}

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
          <Box>
            <HStack display="flex" justifyContent="center">
              <Button
              // onClick={() => signInWithGoogle()}
                colorScheme="twitter"
              //  leftIcon={<FaGoogle />}
              ></Button>
              <Button
               //onClick={() => signInWithTwitter()}
                colorScheme="twitter"
              //  leftIcon={<FaTwitter />}
              ></Button>
              <Button
               // onClick={() => signInWithGithub()}
                colorScheme="twitter"
             //   leftIcon={<FaGithub />}
              ></Button>
            </HStack>
          </Box> 
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
