import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Collapse,
  Container,
  Flex,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/black-logo.svg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";
import { setUser } from "../../redux/features/auth/authSlice";

function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  console.log(user.email);

  const handleSignOut = () => {
    signOut(auth);
    dispatch(setUser(null));
  };

  return (
    <Box bg="gray.50" px={4} py={2}>
      <Container maxW="container.xl" py={2}>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Box>
              <Button
                variant="ghost"
                fontSize={{ base: "16px", md: "20px", lg: "24px" }}
                color="black"
                colorScheme="messenger"
              >
                <Link to="/">
                  <img width={150} src={logo} alt="logo" />
                </Link>
              </Button>
            </Box>
          </Flex>
          <Box display={{ base: "none", md: "block" }}>
            <Flex align="center" gap="4">
              <Button colorScheme="messenger" variant="link">
                <Link to="/">Home</Link>
              </Button>
              <Button colorScheme="messenger" variant="link">
                <Link to="/book">Books</Link>
              </Button>
              <Button colorScheme="messenger" variant="link">
                <Link to="/blog">Blog</Link>
              </Button>
              <Button colorScheme="messenger" variant="link">
                <Link to="/about">About</Link>
              </Button>
            </Flex>
          </Box>
          <Box display={{ base: "none", md: "block" }}>
            {user?.email ? (
              <>
                {user?.email}
                <Button
                  onClick={handleSignOut}
                  colorScheme="messenger"
                  variant="outline"
                  size="sm"
                  ml={2}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  colorScheme="messenger"
                  variant="outline"
                  size="sm"
                  mr={2}
                >
                  <Link to="/login">Login</Link>
                </Button>
                <Button colorScheme="messenger" size="sm" mr={2}>
                  <Link to="/register">Register</Link>
                </Button>
              </>
            )}
          </Box>

          {/* <Spacer /> */}
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Toggle navigation"
            size="md"
            color="black"
            onClick={onToggle}
            display={{ md: "none" }}
          />
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <Box py={4}>
            <Flex direction="column" alignItems="center" gap="3">
              <Button colorScheme="messenger" variant="link">
                <Link to="/">Home</Link>
              </Button>
              <Button colorScheme="messenger" variant="link">
                <Link to="/book">Books</Link>
              </Button>
              <Button colorScheme="messenger" variant="link">
                <Link to="/blog">Blog</Link>
              </Button>
              <Button colorScheme="messenger" variant="link">
                <Link to="/about">About</Link>
              </Button>

              {/* <Menu>
                <MenuButton as={Button} colorScheme="pink">
                  Profile
                </MenuButton>
                <MenuButton as={Wrap} cursor="pointer">
                  <WrapItem>
                    <Avatar
                      name="Dan Abrahmov"
                      src="https://bit.ly/dan-abramov"
                    />
                  </WrapItem>
                </MenuButton>
                <MenuList>
                  <MenuGroup title="Profile">
                    <MenuItem>My Account</MenuItem>
                    <MenuItem>Payments </MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup title="Help">
                    <MenuItem>Docs</MenuItem>
                    <MenuItem>FAQ</MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu> */}
              <Button
                colorScheme="messenger"
                variant="outline"
                size="sm"
                mr={2}
              >
                <Link to="/login">Login</Link>
              </Button>
              <Button colorScheme="messenger" size="sm" mr={2}>
                <Link to="/register">Register</Link>
              </Button>
            </Flex>
          </Box>
        </Collapse>
      </Container>
    </Box>
  );
}

export default Header;
