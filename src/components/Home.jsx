import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import OngoingActivity from "./OngoingActivity.jsx";
import CurrentProjectsPage from "./CurrentProjectsPage.jsx";
import Footer from "./Footer.jsx";

function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <OngoingActivity />
      <CurrentProjectsPage />
      <Footer />
    </div>
  );
}

export default Home;
