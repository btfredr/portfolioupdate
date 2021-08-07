import { useState } from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="home">
      <Nav toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </div>
  );
};

export default Home;
