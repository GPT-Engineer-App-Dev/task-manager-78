import { Box, Text, Link } from '@chakra-ui/react';

const Donations = () => (
  <Box p={5} maxW="480px" m="auto" mt="20vh" bg="white" boxShadow="md">
    <Text fontSize="2xl" fontWeight="bold">Support Our App</Text>
    <Text mt={4}>Your donations help us keep the app running and improve its features. Here's how you can support us:</Text>
    <Text mt={2}>Make a donation through our dedicated payment gateway. Every little bit helps us continue to provide and improve this service.</Text>
    <Link href="#" color="teal.500" mt={2}>Donate Now</Link>
  </Box>
);

export default Donations;