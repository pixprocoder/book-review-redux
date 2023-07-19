import { Box, Button, Flex } from "@chakra-ui/react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counterSlice";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <>
      <h1>Hello world</h1>
      <Flex gap={4} alignItems="center" justifyContent="center">
        <Button
          onClick={() => dispatch(increment())}
          p={"10"}
          colorScheme="blue"
        >
          increase
        </Button>
        <Box margin="12px" fontSize="6xl">
          <span>{count}</span>
        </Box>
        <Button
          onClick={() => dispatch(decrement())}
          p={"10"}
          colorScheme="blue"
        >
          decrease
        </Button>
        <Button
          onClick={() => dispatch(incrementByAmount(3))}
          p={"10"}
          colorScheme="blue"
        >
          By 3
        </Button>
      </Flex>
    </>
  );
}

export default App;
