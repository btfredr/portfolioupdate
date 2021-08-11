import { homeObjOne } from "../components/Data";
import Hero from "../components/Hero";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Skills {...homeObjOne} />
    </div>
  );
};

export default Home;
