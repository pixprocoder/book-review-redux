import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

function TransitionExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement | null>(null);

  const toast = useToast();
  const handleDelete = () => {
    onClose();
    setFirst(false);
    toast({
      title: "I am Sorry ):",
      description: "See you next time",
      status: "success",
      duration: 1500,
      isClosable: true,
      position: "top",
    });
  };

  const handleCancel = () => {
    console.log("No"); // Log "No" when cancel is clicked
    onClose();
    toast({
      title: "I am happy",
      description: "Thanks for not deleting me",
      status: "error",
      duration: 1500,
      isClosable: true,
      position: "top",
    });
    // Perform any other action or simply close the dialog
  };

  const [first, setFirst] = useState(true);
  return (
    <>
      <Box w="50%" mx="auto">
        {first && <h1>HI You really want to delete me 😔 </h1>}
        <Button colorScheme="red" onClick={onOpen}>
          Delete me
        </Button>

        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Customer
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={handleCancel}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={handleDelete} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Box>
    </>
  );
}

export default TransitionExample;
