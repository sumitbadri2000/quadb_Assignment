import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Button,
  Input,
  Stack,
  Box,
  Text,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function JobModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let navigator = useNavigate();
  const handleSubmit = () => {
    navigator("/success");
  };
  return (
    <>
      <Button mt={4} colorScheme="blue" width="100%" onClick={onOpen} size="lg">
        Apply Now
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        {" "}
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <Stack
              bg={"white"}
              rounded={"lg"}
              p={{ base: 4, sm: 6, md: 8 }}
              spacing={{ base: 8 }}
              maxW={{ lg: "lg" }}>
              <Stack spacing={4}>
                <Heading
                  color={"blue.800"}
                  lineHeight={1.1}
                  fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}>
                  Join our team
                  <Text
                    as={"span"}
                    bgGradient="linear(to-r, red.400,pink.400)"
                    bgClip="text">
                    !
                  </Text>
                </Heading>
                <Text color={"gray.600"} fontSize={{ base: "sm", sm: "md" }}>
                  {" "}
                  We’re looking for amazing engineers just like you! Become a
                  part of our rockstar engineering team and skyrocket your
                  career!
                </Text>
              </Stack>
              <Box as={"form"}>
                <Stack spacing={4}>
                  <Input
                    placeholder="First Name"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.600"}
                    _placeholder={{
                      color: "gray.400",
                    }}
                  />
                  <Input
                    placeholder="Email"
                    type="email"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.600"}
                    _placeholder={{
                      color: "gray.400",
                    }}
                  />
                  <Textarea
                    placeholder="Cover Letter"
                    bg={"gray.100"}
                    border={0}
                    color={"gray.600"}
                    _placeholder={{
                      color: "gray.400",
                    }}
                  />
                  <Input
                    type="file"
                    fontFamily={"heading"}
                    color={"gray.800"}
                  />
                </Stack>
                <Button
                  onClick={handleSubmit}
                  fontFamily={"heading"}
                  mt={8}
                  w={"full"}
                  bgGradient="linear(to-r, red.400,pink.400)"
                  color={"white"}
                  _hover={{
                    bgGradient: "linear(to-r, red.400,pink.400)",
                    boxShadow: "xl",
                  }}>
                  Submit
                </Button>
              </Box>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default JobModal;
