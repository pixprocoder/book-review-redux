import {
  Box,
  Flex,
  Spacer,
  IconButton,
  useDisclosure,
  Collapse,
  Button,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
  Wrap,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import logo from "../../assets/images/logo/black-logo.svg";
import { Link } from "react-router-dom";

function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="gray.100" px={4} py={2}>
      <Container maxW="container.xl" py={2}>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <Box>
              <Button
                variant="ghost"
                fontSize={{ base: "16px", md: "20px", lg: "24px" }}
                color="black"
              >
                <Link to="/">
                  <img width={150} src={logo} alt="logo" />
                </Link>
              </Button>
            </Box>
          </Flex>
          <Box display={{ base: "none", md: "block" }}>
            <Flex align="center">
              <Button variant="ghost" color="black" mr={2}>
                Home
              </Button>
              <Button variant="ghost" color="black" mr={2}>
                About
              </Button>
              <Button variant="ghost" color="black" mr={2}>
                Contact
              </Button>
            </Flex>
          </Box>
          <Box display={{ base: "none", md: "block" }}>
            <Button variant="ghost" color="black" mr={2}>
              <Link to="/login">Login</Link>
            </Button>
            {/* <Menu>
              <MenuButton as={Wrap} cursor="pointer">
                <WrapItem>
                  <Avatar
                    size="sm"
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
            <Flex direction="column" alignItems="center">
              <Button variant="ghost" color="black" my={2}>
                Home
              </Button>
              <Button variant="ghost" color="black" my={2}>
                About
              </Button>
              <Button variant="ghost" color="black" my={2}>
                Contact
              </Button>
              <Menu>
                {/* <MenuButton as={Button} colorScheme="pink">
                  Profile
                </MenuButton> */}
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
              </Menu>
            </Flex>
          </Box>
        </Collapse>
      </Container>
    </Box>
  );
}

export default Header;
