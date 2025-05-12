import React, { useRef } from "react";
import ProjectTile from "../components/projects/ProjectTile";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";
import workProjectsData from "../data/workProjectsData";

function WorkProjects() {
  return (
    <section id="projects" data-aos="fade-up">
      <Title title="실무 프로젝트" />
      <SubTitle>
        반응형 웹 퍼블리싱, 웹앱 퍼블리싱, 플러터 앱 개발을 통해
        <br />
        효율적인 사용자 경험을 제공하는 실무 프로젝트를 진행했습니다
      </SubTitle>
      <ul className="project-tile-wrap">
        {workProjectsData.map((project, index) => (
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
