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
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useGetBooksQuery } from "../../redux/api/apiSlice";
import CustomLoading from "../shared/CustomLoading";
import SingleBook from "./SingleBook";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import {
  setFilteredData,
  setSearchTerm,
  setSelectedFilter,
} from "../../redux/features/searchSlice";

function Books() {
  const templateColumns = useBreakpointValue({
    base: "1fr",
    sm: "repeat(2, 1fr)",
    md: "repeat(4, 1fr)",
  });
  const [selected, setSelected] = useState("All");
  const [searchText, setSearchText] = useState("");
  const dispatch = useAppDispatch();
  const { selectedFilter, searchTerm, filteredData } = useAppSelector(
    (state) => state.search
  );

  const { data, isLoading } = useGetBooksQuery(undefined);

  // filtering
  useEffect(() => {
    // Apply filtering logic based on selectedFilter
    const filteredData = data?.data.filter((book: any) => {
      if (selectedFilter === "All") {
        return true;
      }
      if (
        selectedFilter === "Author" &&
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return true;
      }

      if (
        selectedFilter === "Genre" &&
        book.genre.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return true;
      }

      if (
        selectedFilter === "Year" &&
        book.publicationDate.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return true;
      }

      return false;
    });

    // Dispatch the filtered data after performing the search
    dispatch(setFilteredData(filteredData || []));
  }, [selectedFilter, searchTerm, data, dispatch]);

  const handleSearchTermChange = (newSearchTerm: string) => {
    dispatch(setSearchTerm(newSearchTerm));
  };

  // handling search
  const handleSearch = () => {
    dispatch(setSearchTerm(searchText));
    setSearchText("");
  };

  dispatch(setSelectedFilter(selected));

  // handling filter
  const handleAuthor = (e: any) => {
    const buttonValue = e.target.textContent;
    setSelected(buttonValue);
  };
  const handleGenre = (e: any) => {
    const buttonValue = e.target.textContent;
    setSelected(buttonValue);
  };

  const handlePublicationYear = (e: any) => {
    const buttonValue = e.target.textContent;
    setSelected(buttonValue);
  };

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
        <Flex direction={{ base: "column", md: "row", lg: "row" }}>
          <Input
            placeholder={`${
              selected === "All"
                ? `Select A Filter First`
                : `searching by ${selected}`
            } `}
            value={searchTerm}
            onChange={(e) => handleSearchTermChange(e.target.value)}
          />
          <Button
            isDisabled={selected == "All"}
            onClick={handleSearch}
            colorScheme="messenger"
            ml={[0, 2, 4, 4]}
            mt={[2, 0, 0, 0]}
          >
            Search
          </Button>
        </Flex>
        <Flex>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Filter By :{" "}
              <Text display="inline" color="blue">
                {selected}
              </Text>
            </MenuButton>
            <MenuList>
              <MenuItem onClick={handleAuthor}>Author</MenuItem>
              <MenuItem onClick={handleGenre}>Genre</MenuItem>
              <MenuItem onClick={handlePublicationYear}>Year</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {isLoading ? (
        <CustomLoading />
      ) : (
        <Grid mt={4} templateColumns={templateColumns} gap={6}>
          {data?.data === !filteredData
            ? data?.data.map((book: any) => (
                <SingleBook
                  key={book.title}
                  id={book._id}
                  title={book.title}
                  author={book.author}
                  genre={book.genre}
                  publicationDate={book.publicationDate}
                  image={book.image}
                />
              ))
            : filteredData.map((book: any) => (
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
