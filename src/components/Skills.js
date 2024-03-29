import styled from "styled-components";
import Icon1 from "../assets/images/HTML5_logo.svg";
import Icon2 from "../assets/images/CSS3.svg";
import Icon3 from "../assets/images/javascript.svg";
import Icon4 from "../assets/images/Sass.svg";
import Icon5 from "../assets/images/React.svg";
import Icon6 from "../assets/images/Nextjs.svg";
import Icon7 from "../assets/images/tailwind.svg";
import Icon8 from "../assets/images/styled.svg";

const SkillsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  padding-bottom: 100px;
`;

const SkillsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1030px) {
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 20px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
  }

  @media screen and (max-width: 630px) {
    display: flex;
    flex-direction: column;
  }
`;

const SkillsCard = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2 ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const SkillsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

const SkillsH1 = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin-bottom: 64px;
  padding: 1em;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SkillsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const Skills = () => {
  return (
    <>
      <SkillsContainer id="skills">
        <SkillsH1>My Skills</SkillsH1>
        <SkillsWrapper>
          <SkillsCard>
            <SkillsIcon src={Icon1} />
            <SkillsH2>HTML</SkillsH2>
          </SkillsCard>

          <SkillsCard>
            <SkillsIcon src={Icon2} />
            <SkillsH2>CSS</SkillsH2>
          </SkillsCard>

          <SkillsCard>
            <SkillsIcon src={Icon3} />
            <SkillsH2>JavaScript</SkillsH2>
          </SkillsCard>

          <SkillsCard>
            <SkillsIcon src={Icon4} />
            <SkillsH2>Sass/SCSS</SkillsH2>
          </SkillsCard>

          <SkillsCard>
            <SkillsIcon src={Icon5} />
            <SkillsH2>ReactJS</SkillsH2>
          </SkillsCard>

          <SkillsCard>
            <SkillsIcon src={Icon6} />
            <SkillsH2>Next.JS</SkillsH2>
          </SkillsCard>

          <SkillsCard>
            <SkillsIcon src={Icon7} />
            <SkillsH2>TailwindCSS</SkillsH2>
          </SkillsCard>

          <SkillsCard>
            <SkillsIcon src={Icon8} />
            <SkillsH2>Styled Components</SkillsH2>
          </SkillsCard>
        </SkillsWrapper>
      </SkillsContainer>
    </>
  );
};

export default Skills;
