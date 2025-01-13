import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useSingleBookQuery } from "../../redux/api/apiSlice";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
const EditBook = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess } = useSingleBookQuery(id);

  // react hooks form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  const { title, author, image, publicationDate, genre } = data?.data;
  return (
    <Box style={{ minHeight: "85vh" }}>
      <h1 style={{ textAlign: "center" }}>
        Edit on <span style={{ color: "blue" }}>{data?.data?.title}</span>
      </h1>
      <form
        style={{ width: "50%", margin: "auto" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl>
          <FormLabel>Book Title </FormLabel>
          <Input
            {...register("title", { required: true })}
            aria-invalid={errors?.title ? "true" : "false"}
            placeholder={title}
            name="title"
            type="text"
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Genre</FormLabel>
          <Input
            {...register("genre", { required: true })}
            aria-invalid={errors?.genre ? "true" : "false"}
            placeholder={genre}
            name="genre"
            type="text"
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Publication Year</FormLabel>
          <Input
            {...register("publicationYear", { required: true })}
            aria-invalid={errors?.publicationYear ? "true" : "false"}
            placeholder={publicationDate}
            name="publicationYear"
            type="text"
          />
        </FormControl>
        <Button colorScheme="messenger" w="100%" mt="4" type="submit">
          update
        </Button>
      </form>
    </Box>
  );
};

export default EditBook;
