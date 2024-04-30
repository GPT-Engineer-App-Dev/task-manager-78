import { Box, Text } from '@chakra-ui/react';

const Functionality = () => (
  <Box p={5} maxW="480px" m="auto" mt="20vh" bg="white" boxShadow="md">
    <Text fontSize="2xl" fontWeight="bold">App Functionality</Text>
    <Text mt={4}>This app allows you to manage your tasks efficiently. Here's how you can use each feature:</Text>
    <Text mt={2} fontWeight="bold">Add a Task:</Text>
    <Text>Enter a task in the input field and click the 'Add Task' button. Your task will appear below.</Text>
    <Text mt={2} fontWeight="bold">Complete a Task:</Text>
    <Text>Click the green check icon next to a task to mark it as complete.</Text>
    <Text mt={2} fontWeight="bold">Delete a Task:</Text>
    <Text>Click the red trash icon to remove a task from the list.</Text>
  </Box>
);

export default Functionality;