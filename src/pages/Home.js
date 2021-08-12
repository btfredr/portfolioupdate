import { homeObjOne } from "../components/Data";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About {...homeObjOne} />
      <Skills />
    </div>
  );
};

export default Home;
