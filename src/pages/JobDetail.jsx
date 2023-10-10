import {
  Box,
  Text,
  Heading,
  Divider,
  Badge,
  useBreakpointValue,
  Center,
} from "@chakra-ui/react";
import JobModal from "../component/Model";

function JobDetail() {
  let job = JSON.parse(localStorage.getItem("datas"));

  const headingSize = useBreakpointValue({ base: "xl", md: "2xl" });
  const fontSizeLg = useBreakpointValue({ base: "md", md: "lg" });

  return (
    <Center>
      <Box
        p={4}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="lg"
        width={["95%", "80%", "60%"]}
        marginTop="80px">
        <Heading fontSize={headingSize} fontWeight="bold" mb={4}>
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
        <Divider my={4} />
        <Text fontSize={fontSizeLg}>Description:</Text>
        <Text fontSize="md">{job.description}</Text>
        <JobModal />
      </Box>
    </Center>
  );
}

export default JobDetail;
