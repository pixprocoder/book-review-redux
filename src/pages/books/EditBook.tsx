import { Box, Button } from "@chakra-ui/react";
import { useSingleBookQuery } from "../../redux/api/apiSlice";
import { useParams } from "react-router-dom";

const EditBook = () => {
  const { id } = useParams();
  console.log(id);
  const { data, isLoading, isSuccess } = useSingleBookQuery(id);
  console.log(data);
  return (
    <Box>
      <h1 style={{ textAlign: "center" }}>
        you're editing on{" "}
        <span style={{ color: "blue" }}>{data?.data?.title}</span>
      </h1>

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
