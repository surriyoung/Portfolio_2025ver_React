import React, { useRef } from "react";
import ProfileContent from "../components/profile/ProfileContent";
import ProfileTitle from "../components/profile/ProfileTitle";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

const profileData1 = [
  {
    date: "2025.05 - 현재",
    title: "웹프림",
    description: "UI/UX 디자인, 웹 퍼블리싱, 웹앱 개발(Flutter)",
    // 재직중이라면 leaveReason 생략
  },
  {
    date: "2025.05 - 2025.07",
    title: "영롱한마케팅",
    description: "UI/UX 디자인, 웹 퍼블리싱",
    leaveReason: "조직 개편 및 사업 방향 조정으로 웹프림으로 합류",
  },
  {
    date: "2025.03 - 2025.05",
    title: "비젼IPS",
    description: "웹 퍼블리싱, 리액트 프론트앤드 개발",
    leaveReason: "프론트엔드 고도화 프로젝트 종료",
  },
  {
    date: "2023.09 - 2024.10",
    title: "플래시21",
    description: "웹 퍼블리싱, 플랫폼 앱 개발(Flutter)",
    leaveReason: "회사 경영 악화(급여 지연 및 업무 축소)",
  },
];

const profileData2 = [
  {
    date: "2024.12 - 2025.03",
    title: "Open API를 활용한 스마트 웹 & 앱 콘텐츠실무개발자 양성과정",
    description: "프론트엔드 기술 (JavaScript, TypeScript, React) 학습",
  },
  {
    date: "2023.03 - 2023.08",
    title: "반응형 웹디자인(UIUX) 실무 양성과정",
    description:
      "퍼블리셔 기술 (포토샵, 일러스트, 피그마, HTML, CSS, jQuery) 학습",
  },
  {
    date: "2020.03 - 2023.02",
    title: "가톨릭대학교 공간디자인소비자학과·미디어기술콘텐츠학과",
    description: "소비자학, 영상 콘텐츠 제작과 관련된 기술 및 이론 학습",
  },
];

const profileData3 = [
  {
    date: "2023.09",
    title: "웹디자인기능사",
    description: "UI 구성 및 시안 제작 능력 검정",
  },
  {
    date: "2023.07",
    title: "컴퓨터그래픽스운용기능사",
    description: "그래픽 편집 및 출력 실무 능력 검정",
  },
  {
    date: "2023.03",
    title: "그래픽기술자격(GTQ) 1급",
    description: "포토샵 활용 능력 검정",
  },
];

function Profile() {
  return (
    <section className="observe-target about" id="about" data-aos="fade-up">
      <Title title="프로필" />
      <SubTitle>
        창의적인 웹 디자인과 반응형 웹 퍼블리싱,
        <br />
        그리고 React·Flutter 기반의 완성도 높은 프론트엔드 경험을 제공합니다.
      </SubTitle>
      <ProfileTitle title="업무경험" items={profileData1} />
      <ProfileContent items={profileData1} />
      <ProfileTitle title="학습이력" />
      <ProfileContent items={profileData2} />
      <ProfileTitle title="취득자격" />
      <ProfileContent items={profileData3} />
    </section>
  );
}
export default Profile;
