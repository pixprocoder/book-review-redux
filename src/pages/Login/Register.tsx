import {Box, Button, Center, FormControl, FormLabel, Input, Text,} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {createUser} from "../../redux/features/auth/authSlice";
import {useAppDispatch} from "../../redux/hooks/hooks";
import {useForm} from "react-hook-form";

// import end

function Register() {
  const dispatch = useAppDispatch();

  // handling form register
  const {register, handleSubmit, reset, formState:{errors}} = useForm()
  const onSubmit = (values:any) => {
    const {email, password } = values;
    dispatch(createUser({email, password}))
    reset()
  }


  return (
    <Box minH="90vh" display="flex" justifyContent="center" alignItems="center">
      <Box w={{ base: "100%", md: "50%" }} bg="gray.50" p="10" mt="12" rounded="lg" mx="auto">
        <Center fontSize={33} textColor="blue.400" fontWeight="bold">
          Please Register
        </Center>
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel>Your Name *</FormLabel>
              <Input
                  {...register("name", {required: true})}
                  aria-invalid={errors.name ? "true" : "false"}
                  name="name" type="text" />
              {errors.name?.type === 'required' && (
                  <Text
                      fontSize="xs"
                      role="alert" color="red.500">
                    Name is required
                  </Text>
              )}

            </FormControl>
            <FormControl>
              <FormLabel mt={4}>Your Email *</FormLabel>
              <Input
                  {...register("email", {required: true})}
                  aria-invalid={errors.email ? "true" : "false"}
                  name="email" type="email" />

              {errors.email?.type === 'required' && (
                  <Text
                      fontSize="xs"
                      role="alert" color="red.500">
                    Email is required
                  </Text>
              )}
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Your Password *</FormLabel>
              <Input
                  {...register("password", {required: true})}
                  aria-invalid={errors.password ? "true" : "false"}
                id="password"
                name="password"
                type="password"
              />
              {errors.password?.type === 'required' && (
                  <Text
                      fontSize="xs"
                      role="alert" color="red.500">
                    Password is required
                  </Text>
              )}
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
