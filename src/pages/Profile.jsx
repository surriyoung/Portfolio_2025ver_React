import ProfileContent from "../components/profile/ProfileContent";
import ProfileTitle from "../components/profile/ProfileTitle";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

const profileData1 = [
  {
    date: "2023.09 - 2024.10",
    title: "플래시21",
    description: "웹 퍼블리싱, 플랫폼 앱 개발(Flutter)",
  },
];

const profileData2 = [
  {
    date: "2024.12 - 현재",
    title: "Open API를 활용한 스마트 웹 & 앱 콘텐츠실무개발자 양성과정",
    description: "웹 퍼블리싱, 플랫폼 앱 개발(Flutter)",
  },
  {
    date: "2023.03 - 2023.08",
    title: "반응형 웹디자인(UIUX) 실무 양성과정",
    description: "웹 퍼블리싱, 플랫폼 앱 개발(Flutter)",
  },
  {
    date: "2023.03 - 2023.08",
    title: "가톨릭대학교 공간디자인소비자학과·미디어기술콘텐츠학과",
    description: "웹 퍼블리싱, 플랫폼 앱 개발(Flutter)",
  },
];

const profileData3 = [
  {
    date: "2023.03",
    title: "그래픽기술자격(GTQ) 1급",
    description: "포토샵 활용 능력 검정",
  },
  {
    date: "2023.07",
    title: "컴퓨터그래픽스운용기능사",
    description: "그래픽 편집 및 출력 실무 능력 검정",
  },
  {
    date: "2023.09",
    title: "웹디자인기능사",
    description: "UI 구성 및 시안 제작 능력 검정",
  },
];

function Profile() {
  return (
    <section data-aos="fade-up">
      <Title title="프로필" />
      <SubTitle>
        창의적인 웹 디자인과 반응형 웹 퍼블리싱,
        <br />
        그리고 React·Flutter 기반의 완성도 높은 프론트엔드 경험을 제공합니다.
      </SubTitle>
      <ProfileTitle title="업무경험" />
      <ProfileContent items={profileData1} />
      <ProfileTitle title="학습이력" />
      <ProfileContent items={profileData2} />
      <ProfileTitle title="취득자격" />
      <ProfileContent items={profileData3} />
    </section>
  );
}
export default Profile;
