import { homeObjOne, homeObjThree, homeObjTwo } from "../components/Data";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About {...homeObjOne} />
      <About {...homeObjTwo} />
      <About {...homeObjThree} />
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;
