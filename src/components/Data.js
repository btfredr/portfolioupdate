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
  buttonLabel: "My Main Focus",
  imgStart: false,
  img: image1,
  alt: "Me",
  dark: true,
  darkText: false,
  primary: true,
};

export const homeObjTwo = {
  id: "focus",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "My main focus",
  headline: "React",
  description:
    "I've been spending most of my time building apps in React, both to keep up with the times as well as because that's what I enjoy the most.",
  buttonLabel: "Projects",
  imgStart: true,
  img: image2,
  alt: "ReactJS logo",
  dark: false,
  darkText: true,
  primary: false,
};
