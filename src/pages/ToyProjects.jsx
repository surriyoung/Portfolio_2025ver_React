import { useState, useEffect } from "react";
import ProjectTile from "../components/projects/ProjectTile";
import ProjectDetailModal from "../components/projects/ProjectDetailModal";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";
import { getToyProjects } from "../data/toyProjectsData";

const toolImages = import.meta.glob("../assets/tools/*.png", { eager: true });

const devList = Object.entries(toolImages)
  .sort(([a], [b]) => {
    const getNumber = (str) => Number(str.match(/\d+/)?.[0]);
    return getNumber(a) - getNumber(b);
  })
  .map(([, img]) => img);

const toolNames = [
  "포토샵",
  "일러스트",
  "XD",
  "프리미어프로",
  "애프터이펙트",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Flutter",
  "Figma",
  "jQueruy",
  "Vite",
];

// devItems 생성
const devItems = devList.map((img, index) => ({
  image: img.default,
  name: toolNames[index] || `툴 ${index + 1}`,
}));

function ToyProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);

  // devItems가 준비되었을 때 getToyProjects 호출
  useEffect(() => {
    const loadedProjects = getToyProjects(devItems);
    setProjects(loadedProjects);
  }, [devItems]);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section className="observe-target projects toy-project" data-aos="fade-up">
      <Title title="사이드 프로젝트" />
      <SubTitle>
        새로운 기술 스택을 탐구하고
        <br />
        아이디어를 직접 구현하며 폭을 넓힌 개인 프로젝트입니다
      </SubTitle>
      {/* <ul className="project-tab">
        <li>프론트개발</li>
        <li>디자인</li>
      </ul> */}
      <ul className="project-tile-wrap">
        {projects.map((project, index) => (
          <ProjectTile
            key={index}
            onClick={() => handleOpenModal(project)}
            logo={project.logo}
            title={project.title}
            cont={project.cont}
            type={project.type}
            design={project.design}
            devItems={project.devItems}
          />
        ))}
      </ul>

      {selectedProject && (
        <ProjectDetailModal
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </section>
  );
}

export default ToyProjects;
