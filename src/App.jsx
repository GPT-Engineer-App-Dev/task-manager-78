import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Functionality from './pages/Functionality.jsx';
import Donations from './pages/Donations.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/functionality" element={<Functionality />} />
        <Route path="/donations" element={<Donations />} />
      </Routes>
    </Router>
  );
}

export default App;