import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PoliciesPage from "./components/PoliciesPage";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ScrollToTop from "./components/ScrollToTop";
import Gallery from "./components/Gallery";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policies" element={<PoliciesPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
