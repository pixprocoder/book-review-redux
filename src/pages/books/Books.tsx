import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Grid,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useGetBooksQuery } from "../../redux/api/apiSlice";
import CustomLoading from "../shared/CustomLoading";
import SingleBook from "./SingleBook";
import { useRef, useState } from "react";

function Books() {
  const [selectedFilter, setSelectedFilter] = useState("");

  const [searchText, setSearchText] = useState("");

  // handling search
  const handleSearch = () => {
    console.log("Search Text:", searchText);
  };

  // handling filter
  const handleAuthor = (e: any) => {
    const buttonValue = e.target.textContent;
    setSelectedFilter(buttonValue);
  };
  const handleGenre = (e: any) => {
    const buttonValue = e.target.textContent;
    setSelectedFilter(buttonValue);
  };

  const handlePublicationYear = (e: any) => {
    const buttonValue = e.target.textContent;
    setSelectedFilter(buttonValue);
  };

  const { data, isLoading } = useGetBooksQuery(undefined);
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
          <Input
            placeholder={`${
              selectedFilter
                ? `searching by ${selectedFilter}`
                : `Select A Filter First`
            } `}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            isDisabled={!selectedFilter}
            onClick={handleSearch}
            colorScheme="messenger"
            ml={4}
          >
            Search
          </Button>
        </Flex>
        <Flex>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Filter By :{" "}
              <Text display="inline" color="blue">
                {selectedFilter}
              </Text>
            </MenuButton>
            <MenuList>
              <MenuItem onClick={handleAuthor}>Author</MenuItem>
              <MenuItem onClick={handleGenre}>Genre</MenuItem>
              <MenuItem onClick={handlePublicationYear}>
                Publication Year
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {isLoading ? (
        <CustomLoading />
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
