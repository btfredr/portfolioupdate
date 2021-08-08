import styled from "styled-components";
import Video2 from "../assets/videos/video2.mp4";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__bg">
          <VideoBg autoPlay loop muted src={Video2} type="video/mp4" />
        </div>

        <div className="hero__content">
          <h1 className="hero__h1">Fredrik Fordelsen</h1>
          <p className="hero__p">Frontend Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background-color: #232a34;
  opacity: 1;
`;
