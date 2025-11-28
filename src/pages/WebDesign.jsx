import React, { useState } from "react";
import Title from "../components/Title";
import SubTitle from "../components/SubTitle";
import WebDesignTile from "../components/webDesign/WebDesignTile";
import webDesignProjectsData from "../data/webDesignProjectsData";

function WebDesign({ onOpenModal }) {
  const [selectedTab, setSelectedTab] = useState("all");

  const handleTabClick = (type) => {
    setSelectedTab(type);
  };

  // 🔹 타입별 개수 계산
  const totalCount = webDesignProjectsData.length;
  const detailEventCount = webDesignProjectsData.filter(
    (p) => p.type === "detailEvent"
  ).length;
  const bannerBlogCount = webDesignProjectsData.filter(
    (p) => p.type === "bannerBlog"
  ).length;
  const uiuxCount = webDesignProjectsData.filter(
    (p) => p.type === "uiux"
  ).length;

  // 🔹 선택된 탭에 따라 필터링
  const filteredProjects = webDesignProjectsData.filter((project) => {
    if (selectedTab === "all") return true;
    if (selectedTab === "detailEvent") return project.type === "detailEvent";
    if (selectedTab === "bannerBlog") return project.type === "bannerBlog";
    if (selectedTab === "uiux") return project.type === "uiux";
    return true;
  });

  return (
    <section
      className="observe-target design"
      id="design"
      data-aos="fade-up"
    >
      <Title title="웹 디자인" />
      <SubTitle>
        컨셉과 목표에 맞춰 구성한
        <br />
        웹 콘텐츠 디자인 작업물입니다.
      </SubTitle>

      {/* 🔹 탭 영역 */}
      <ul className="project-tab design-tab">
        <li
          className={selectedTab === "all" ? "on" : ""}
          onClick={() => handleTabClick("all")}
        >
          전체 <span className="count">({totalCount})</span>
        </li>

        {/* 상세 & 이벤트 - count가 0일 때 숨김 */}
        {detailEventCount > 0 && (
          <li
            className={selectedTab === "detailEvent" ? "on" : ""}
            onClick={() => handleTabClick("detailEvent")}
          >
            디자인A <span className="count">({detailEventCount})</span>
          </li>
        )}

        {/* 배너 & 블로그 - count가 0일 때 숨김 */}
        {bannerBlogCount > 0 && (
          <li
            className={selectedTab === "bannerBlog" ? "on" : ""}
            onClick={() => handleTabClick("bannerBlog")}
          >
            디자인B <span className="count">({bannerBlogCount})</span>
          </li>
        )}

        {/* UI/UX - count가 0일 때 숨김 */}
        {uiuxCount > 0 && (
          <li
            className={selectedTab === "uiux" ? "on" : ""}
            onClick={() => handleTabClick("uiux")}
          >
            UI/UX <span className="count">({uiuxCount})</span>
          </li>
        )}
      </ul>
      {/* 🔹 리스트 영역 */}
      <ul className="design-tile-wrap">
        {filteredProjects.map((project) => (
          <WebDesignTile
            key={project.id}
            thumbnail={project.thumbnail}
            title={project.title}
            description={project.description}
            type={project.type} // 필요하면 타일에서 뱃지 표시 등에 사용 가능
            onClick={() => onOpenModal(project)}
          />
        ))}
      </ul>
    </section>
  );
}

export default WebDesign;
