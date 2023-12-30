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
} from "@chakra-ui/react";
import SingleBook from "./SingleBook";
import { useEffect, useState } from "react";
import { IBooks } from "../../constant";
import { ChevronDownIcon } from "@chakra-ui/icons";

function Books() {
  const [books, setBooks] = useState<IBooks[]>([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

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

      <Grid mt={4} templateColumns="repeat(3, 1fr)" gap={6}>
        {books.map((book) => (
          <SingleBook
            key={book.title}
            title={book.title}
            author={book.author}
            genre={book.genre}
            publicationDate={book.publicationDate}
            image={book.image}
          />
        ))}
      </Grid>
    </>
  );
}

export default Books;
