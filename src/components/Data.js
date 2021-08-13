import image1 from "../assets/images/soundcloud.jpg";
import image2 from "../assets/images/React.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "What do I do?",
  headline: "Frontend Development",
  description:
    "I recently finished my education as a Frontend Developer at Noroff in Bergen, Norway. I've worked a lot with React, Next, some design frameworks as well as some backend stuff.",
  buttonLabel: "Get Started",
  imgStart: false,
  img: image1,
  alt: "Me",
  dark: true,
  darkText: false,
  primary: true,
};

export const homeObjTwo = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "My main focus",
  headline: "React",
  description:
    "I recently finished my education as a Frontend Developer at Noroff in Bergen, Norway. I've worked a lot with React, Next, some design frameworks as well as some backend stuff.",
  buttonLabel: "Get Started",
  imgStart: true,
  img: image2,
  alt: "ReactJS logo",
  dark: false,
  darkText: true,
  primary: false,
};

export const homeObjThree = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "What do I do?",
  headline: "Frontend Development",
  description:
    "I recently finished my education as a Frontend Developer at Noroff in Bergen, Norway. I've worked a lot with React, Next, some design frameworks as well as some backend stuff.",
  buttonLabel: "Get Started",
  imgStart: false,
  img: require("../assets/images/soundcloud.jpg"),
  alt: "Me",
  dark: false,
  darkText: true,
  primary: true,
};
