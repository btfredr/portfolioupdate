import styled from "styled-components";
import Icon1 from "../assets/images/Breaking_Bad_logo.svg";
import Icon2 from "../assets/images/Hulu_logo.svg";
import Icon3 from "../assets/images/LinkedIn_Logo.svg";

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

const ProjectsCard = styled.a`
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
  text-decoration: none;
  color: black;

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
      <ProjectsContainer id="projectsMobile">
        <ProjectsH1>Previous projects</ProjectsH1>
        <ProjectsWrapper>
          <ProjectsCard
            href="https://www.breakingbad.fredrikfordelsen.no"
            target="_blank"
            rel="noreferrer"
          >
            <ProjectsIcon src={Icon1} />
            <ProjectsH2>Breaking Bad Database</ProjectsH2>
            <ProjectsP>Breaking Bad character database</ProjectsP>
          </ProjectsCard>

          <ProjectsCard
            href="https://hulu-clone-rust.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <ProjectsIcon src={Icon2} />
            <ProjectsH2>Hulu Clone</ProjectsH2>
            <ProjectsP>NextJS Hulu Clone with movie API</ProjectsP>
          </ProjectsCard>

          <ProjectsCard
            href="https://linkedin-84969.web.app"
            target="_blank"
            rel="noreferrer"
          >
            <ProjectsIcon src={Icon3} />
            <ProjectsH2>LinkedIn Clone</ProjectsH2>
            <ProjectsP>LinkedIn Clone with Redux and Firebase</ProjectsP>
          </ProjectsCard>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
