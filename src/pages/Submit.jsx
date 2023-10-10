import {
  Badge,
  Box,
  Center,
  Divider,
  Heading,
  Text,
  useBreakpointValue,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function Success() {
  const naviagte = useNavigate();
  let job = JSON.parse(localStorage.getItem("datas"));
  const headingSize = useBreakpointValue({ base: "xl", md: "2xl" });
  const fontSizeLg = useBreakpointValue({ base: "md", md: "lg" });
  const backPage = () => {
    naviagte("/");
  };
  return (
    <Center flexDirection="column" alignItems="center" minHeight="100vh">
      <Box
        p={6}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="lg"
        bg={"teal.100"}
        width={["90%", "80%", "60%"]}
        marginTop={["20px", "40px"]}
        textAlign="center">
        <Icon as={CheckCircleIcon} w={12} h={12} color="green.400" />
        <Heading fontSize={headingSize} fontWeight="bold" my={4}>
          {job.title}
        </Heading>
        <Text fontSize={fontSizeLg}>
          Company Name:{" "}
          <Badge colorScheme="blue">{job.company?.display_name}</Badge>
        </Text>
        <Text fontSize={fontSizeLg}>Category: {job.category?.label}</Text>
        <Text fontSize={fontSizeLg}>
          Location: {job.location?.display_name}
        </Text>
        <Text fontSize={fontSizeLg}>Contract Time: {job.contract_time}</Text>
        <Text fontSize={fontSizeLg}>Contract Type: {job.contract_type}</Text>
        <Divider my={6} borderColor="gray.300" />
        <Text fontSize={fontSizeLg}>Description:</Text>
        <Text fontSize="md">{job.description}</Text>
      </Box>

      <VStack spacing={4} width={["90%", "80%", "60%"]} py={10}>
        <Text fontSize="lg" color="gray.600">
          Thanks for submitting your application. Our team will get back to you
          soon.
        </Text>
        <Box fontSize="lg">
          <Text as="span" color="gray.500">
            Return{" "}
          </Text>
          <Text as="span" color="blue.500" cursor="pointer" onClick={backPage}>
            Home
          </Text>
        </Box>
      </VStack>
    </Center>
  );
}

export default Success;
