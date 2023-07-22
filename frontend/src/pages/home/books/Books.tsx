import { Input, Box, Button, Grid } from "@chakra-ui/react";
import SingleBook from "./SingleBook";
import { useEffect, useState } from "react";
import { IBooks } from "../../../constant";

function Books() {
  const [books, setBooks] = useState<IBooks[]>([]);

  useEffect(() => {
    fetch("https://bookreview-iuzc.onrender.com/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <>
      <Box gap={4} mt={4} display="flex" w="50%" mx="auto">
        <Input placeholder="Search by anything" />
        <Button>Search</Button>
      </Box>
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
