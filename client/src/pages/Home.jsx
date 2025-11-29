import ExclusiveOffers from "../components/ExclusiveOffers";
import FeaturedDestination from "../components/FeaturedDestination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import Testimonial from "../components/Testimonial";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import RecommendedHotels from "../components/recommendedHotels";

const Home = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <>
      <header>{!isOwnerPath && <Navbar />}</header>
      <main>
        <Hero />
        <RecommendedHotels />
        <FeaturedDestination />
        <ExclusiveOffers />
        <Testimonial />
        <NewsLetter />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
