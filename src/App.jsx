import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Index from "./pages/Index.jsx";
import Functionality from './pages/Functionality.jsx';
import Donations from './pages/Donations.jsx';

function App() {
  return (
    <Router>
      <Box as="nav" bg="teal.500" p={3}>
        <Flex justify="space-between" align="center" maxW="960px" m="auto">
          <Link as={RouterLink} to="/" p={2} color="white" _hover={{ textDecor: 'none', bg: 'teal.600' }}>Home</Link>
          <Link as={RouterLink} to="/functionality" p={2} color="white" _hover={{ textDecor: 'none', bg: 'teal.600' }}>Functionality</Link>
          <Link as={RouterLink} to="/donations" p={2} color="white" _hover={{ textDecor: 'none', bg: 'teal.600' }}>Donations</Link>
        </Flex>
      </Box>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/functionality" element={<Functionality />} />
        <Route path="/donations" element={<Donations />} />
      </Routes>
    </Router>
  );
}

export default App;