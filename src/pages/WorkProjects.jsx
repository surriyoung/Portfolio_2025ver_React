import React, { useState } from "react";
import ProjectTile from "../components/projects/ProjectTile";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";
import workProjectsData from "../data/workProjectsData";

function WorkProjects() {
  const [selectedTab, setSelectedTab] = useState("all");

  const handleTabClick = (type) => {
    setSelectedTab(type);
  };

  // 필터링 조건
  const filteredProjects = workProjectsData.filter((project) => {
    if (selectedTab === "all") return true;
    if (selectedTab === "flutter") return project.type === "flutter";
    if (selectedTab === "publishing")
      return project.type === "web" || project.type === "webapp";
    return false;
  });

  return (
    <section id="projects" className="work-project" data-aos="fade-up">
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
          전체
        </li>
        <li
          className={selectedTab === "publishing" ? "on" : ""}
          onClick={() => handleTabClick("publishing")}
        >
          퍼블리싱
        </li>
        <li
          className={selectedTab === "flutter" ? "on" : ""}
          onClick={() => handleTabClick("flutter")}
        >
          앱개발
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
            design={project.design}
            devItems={project.devItems}
          />
        ))}
      </ul>
    </section>
  );
}

export default WorkProjects;
