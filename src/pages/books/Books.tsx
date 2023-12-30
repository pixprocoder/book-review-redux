import {
  Input,
  Box,
  Button,
  Grid,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spinner,
} from "@chakra-ui/react";
import SingleBook from "./SingleBook";
import { useEffect, useState } from "react";
import { IBooks } from "../../constant";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useGetBooksQuery } from "../../redux/api/apiSlice";

function Books() {
  const { data, isLoading } = useGetBooksQuery(undefined);
  console.log(isLoading);

  return (
    <>
      <Flex
        gap={4}
        my={10}
        display="flex"
        justifyContent="space-between"
        w="100%"
        mx="auto"
      >
        <Flex>
          <Input placeholder="Search by anything" />
          <Button colorScheme="messenger" ml={4}>
            Search
          </Button>
        </Flex>
        <Flex>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Filter By
            </MenuButton>
            <MenuList>
              <MenuItem>Genre</MenuItem>
              <MenuItem>Publication Year</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {isLoading ? (
        <Box
          minH="90vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Box>
      ) : (
        <Grid mt={4} templateColumns="repeat(3, 1fr)" gap={6}>
          {data?.data.map((book: any) => (
            <SingleBook
              key={book.title}
              id={book._id}
              title={book.title}
              author={book.author}
              genre={book.genre}
              publicationDate={book.publicationDate}
              image={book.image}
            />
          ))}
        </Grid>
      )}
    </>
  );
}

export default Books;
