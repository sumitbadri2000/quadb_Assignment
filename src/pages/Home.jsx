import {
  Box,
  Button,
  Flex,
  Grid,
  Input,
  Text,
  Heading,
  Center,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (query === "") {
      return alert("Please enter a programming language");
    }
    setLoading(true);
    try {
      let res = await axios.get(
        `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=2f8e9428&app_key=5fea606001f8c9bec6037c29d2da8c95&results_per_page=20&what=${query}%20developer&content-type=application/json`
      );
      setLoading(false);
      setData(res.data.results);
      // console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  const storeData = (el) => {
    let obj = {
      ...el,
    };
    localStorage.setItem("datas", JSON.stringify(obj));
    navigate(`/jobDetails/${el.id}`);
  };

  return (
    <Center>
      <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="md" w="90%">
        <Heading as="h1" fontSize="3xl" mb={4}>
          Find Your Dream Job
        </Heading>
        <Flex flexDirection="row" alignItems="center" gap={4}>
          <Input
            placeholder="Enter Programming Language"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            w="100%"
          />
          <Button onClick={handleSubmit} colorScheme="blue" w="30%" size="md">
            Search
          </Button>
        </Flex>
        {loading ? (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : (
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              xl: "repeat(3,1fr)",
            }}
            gap={4}
            mt={8}>
            {data.map((job, index) => (
              <Box
                key={index}
                borderWidth="1px"
                borderRadius="md"
                p={4}
                cursor="pointer"
                onClick={() => storeData(job)}
                _hover={{
                  backgroundColor: "gray.100",
                }}>
                <Text fontSize="xl" fontWeight="bold">
                  {job.title}
                </Text>
                <Text fontSize="lg">Company: {job.company?.display_name}</Text>
                <Text fontSize="lg">Category: {job.category?.label}</Text>
                <Text fontSize="lg">
                  Location: {job.location?.display_name}
                </Text>
                <Text fontSize="lg">Contract Time: {job.contract_time}</Text>
              </Box>
            ))}
          </Grid>
        )}
      </Box>
    </Center>
  );
}

export default Home;
