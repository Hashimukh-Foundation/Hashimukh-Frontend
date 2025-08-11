import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import OngoingActivity from "./OngoingActivity.jsx";
import CurrentProjectsPage from "./CurrentProjectsPage.jsx";
import Footer from "./Footer.jsx";
import AboutUsSection from "./AboutUsSection.jsx";

function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <OngoingActivity />
      <AboutUsSection />
      <CurrentProjectsPage />
      <Footer />
    </div>
  );
}

export default Home;
