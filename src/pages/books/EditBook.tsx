import { Box, Button } from "@chakra-ui/react";
import { useSingleBookQuery } from "../../redux/api/apiSlice";

const EditBook = () => {
  // const { data, isLoading, isSuccess } = useSingleBookQuery(2);
  return (
    <Box>
      <h1 style={{ textAlign: "center" }}>This is edit Book page</h1>

      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        aliquam voluptates tenetur veritatis, molestiae delectus rem non quis id
        minus quidem tempora? Repudiandae unde quisquam ducimus officiis error
        natus. Tempora?
      </h1>
      <Button>Update</Button>
    </Box>
  );
};

export default EditBook;
