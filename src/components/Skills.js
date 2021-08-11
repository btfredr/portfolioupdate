import styled from "styled-components";

import image from "../assets/images/soundcloud.jpg";

const Skills = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  img,
  alt,
}) => {
  return (
    <div className="skills">
      <SkillsContainer lightBg={lightBg} id={id}>
        <div className="skills__wrapper">
          <SkillsRow imgStart={imgStart}>
            <div className="skills__column1">
              <div className="skills__textWrapper">
                <p className="skills__topLine">{topLine}</p>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
              </div>
            </div>

            <div className="skills__column2">
              <ImgWrap>
                <Img src={image} alt={alt} />
              </ImgWrap>
            </div>
          </SkillsRow>
        </div>
      </SkillsContainer>
    </div>
  );
};

export default Skills;

export const SkillsContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const SkillsRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: 50%;
  height: auto;

  @media screen and (max-width: 440px) {
    margin-top: -350px;
`;
