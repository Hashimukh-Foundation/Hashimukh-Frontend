import CurrentProjectsPage from "./components/CurrentProjectsPage";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OngoingActivity from "./components/OngoingActivity";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <OngoingActivity />
      <CurrentProjectsPage />
    </div>
  );
}

export default App;
