import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import OngoingActivity from "./OngoingActivity.jsx";
import CurrentProjectsPage from "./CurrentProjectsPage.jsx";
import Footer from "./Footer.jsx";
import AboutUsSection from "./AboutUsSection.jsx";
import PhotosSection from "./PhotosSection.jsx";
import ContactSection from "./ContactSection.jsx";
import JoinUsSection from "./JoinUsSection.jsx";

function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <OngoingActivity />
      <AboutUsSection />
      <PhotosSection />
      <CurrentProjectsPage />
      <JoinUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Home;
