import React, { useState } from "react";
import ProjectTile from "../components/projects/ProjectTile";
import ProjectDetailModal from "../components/projects/ProjectDetailModal";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";
import workProjectsData from "../data/workProjectsData";

function WorkProjects() {
  const [selectedTab, setSelectedTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const handleTabClick = (type) => {
    setSelectedTab(type);
  };

  // 각 타입별 개수 계산
  const totalCount = workProjectsData.length;
  const publishingCount = workProjectsData.filter(
    (p) => p.type === "web" || p.type === "webapp" || p.type === "sir"
  ).length;
  const flutterCount = workProjectsData.filter(
    (p) => p.type === "flutter"
  ).length;

  // 선택된 탭에 따른 필터링
  const filteredProjects = workProjectsData.filter((project) => {
    if (selectedTab === "all") return true;
    if (selectedTab === "flutter") return project.type === "flutter";
    if (selectedTab === "publishing")
      return project.type === "web" || project.type === "webapp" || project.type === "sir";
    return false;
  });

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section
      className="observe-target projects work-project"
      id="projects"
      data-aos="fade-up"
    >
      <Title title="실무 프로젝트" />
      <SubTitle>
        반응형 웹 퍼블리싱, 웹앱 퍼블리싱, 플러터 앱 개발을 통해
        <br />
        효율적인 사용자 경험을 제공하는 실무 프로젝트를 진행했습니다
      </SubTitle>

      <ul className="project-tab">
        <li
          className={selectedTab === "all" ? "on" : ""}
          onClick={() => handleTabClick("all")}
        >
          전체 <span className="count">({totalCount})</span>
        </li>
        <li
          className={selectedTab === "publishing" ? "on" : ""}
          onClick={() => handleTabClick("publishing")}
        >
          퍼블리싱 <span className="count">({publishingCount})</span>
        </li>
        <li
          className={selectedTab === "flutter" ? "on" : ""}
          onClick={() => handleTabClick("flutter")}
        >
          앱개발 <span className="count">({flutterCount})</span>
        </li>
      </ul>

      <ul className="project-tile-wrap">
        {filteredProjects.map((project, index) => (
          <ProjectTile
            key={index}
            logo={project.logo}
            title={project.title}
            cont={project.cont}
            type={project.type}
            devItems={project.devItems}
            onClick={() => handleOpenModal(project)}
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

export default WorkProjects;