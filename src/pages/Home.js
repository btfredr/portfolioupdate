import { homeObjOne, homeObjTwo } from "../components/Data";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import { SliderData } from "../components/SliderData";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About {...homeObjOne} />
      <About {...homeObjTwo} />
      <Projects />
      <Carousel slides={SliderData} />
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;
