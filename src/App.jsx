import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PoliciesPage from "./components/PoliciesPage";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policies" element={<PoliciesPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
