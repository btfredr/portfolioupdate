import styled from "styled-components";
import Icon1 from "../assets/images/Breaking_Bad_logo.svg";
import Icon2 from "../assets/images/Hulu_logo.svg";
import Icon3 from "../assets/images/LinkedIn_Logo.svg";
import Icon4 from "../assets/images/Sass.svg";
import Icon5 from "../assets/images/React.svg";
import Icon6 from "../assets/images/Nextjs.svg";
import Icon7 from "../assets/images/tailwind.svg";
import Icon8 from "../assets/images/styled.svg";

const ProjectsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #010606;
  padding-bottom: 100px;

  @media screen and (min-width: 1100px) {
    display: none;
  }
`;

const ProjectsWrapper = styled.div`
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

const ProjectsCard = styled.div`
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

const ProjectsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  padding: 1em;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

const ProjectsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

const Projects = () => {
  return (
    <>
      <ProjectsContainer>
        <ProjectsH1>Previous projects</ProjectsH1>
        <ProjectsWrapper>
          <ProjectsCard>
            <ProjectsIcon src={Icon1} />
            <ProjectsH2>HTML</ProjectsH2>
            <ProjectsP>Description</ProjectsP>
          </ProjectsCard>

          <ProjectsCard>
            <ProjectsIcon src={Icon2} />
            <ProjectsH2>CSS</ProjectsH2>
            <ProjectsP>Description</ProjectsP>
          </ProjectsCard>

          <ProjectsCard>
            <ProjectsIcon src={Icon3} />
            <ProjectsH2>JavaScript</ProjectsH2>
            <ProjectsP>Description</ProjectsP>
          </ProjectsCard>

          <ProjectsCard>
            <ProjectsIcon src={Icon4} />
            <ProjectsH2>Sass/SCSS</ProjectsH2>
            <ProjectsP>Description</ProjectsP>
          </ProjectsCard>

          <ProjectsCard>
            <ProjectsIcon src={Icon5} />
            <ProjectsH2>ReactJS</ProjectsH2>
            <ProjectsP>Description</ProjectsP>
          </ProjectsCard>

          <ProjectsCard>
            <ProjectsIcon src={Icon6} />
            <ProjectsH2>Next.JS</ProjectsH2>
            <ProjectsP>Description</ProjectsP>
          </ProjectsCard>

          <ProjectsCard>
            <ProjectsIcon src={Icon7} />
            <ProjectsH2>TailwindCSS</ProjectsH2>
            <ProjectsP>Description</ProjectsP>
          </ProjectsCard>

          <ProjectsCard>
            <ProjectsIcon src={Icon8} />
            <ProjectsH2>Styled Components</ProjectsH2>
            <ProjectsP>Description</ProjectsP>
          </ProjectsCard>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
