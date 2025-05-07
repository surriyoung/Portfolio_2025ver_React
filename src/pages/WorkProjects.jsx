import ProjectTile from "../components/projects/ProjectTile";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";
import Logo1 from "../assets/projects/work/logo1.svg";
import Logo2 from "../assets/projects/work/logo2.svg";
import Logo3 from "../assets/projects/work/logo3.svg";
import Logo4 from "../assets/projects/work/logo4.svg";

const toolImages = import.meta.glob("../assets/tools/*.png", { eager: true });

const devList = Object.entries(toolImages)
  .sort(([a], [b]) => {
    const getNumber = (str) => Number(str.match(/\d+/)?.[0]); // 숫자만 추출
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
  "jQueruy",
  "React",
  "Flutter",
  "Figma",
];

const devItems = devList.map((img, index) => ({
  image: img.default, // Vite의 glob import는 객체 형태로 반환됨
  name: toolNames[index] || `툴 ${index + 1}`,
}));

function WorkProjects() {
  return (
    <section data-aos="fade-up">
      <Title title="실무 프로젝트" />
      <SubTitle>
        반응형 웹 퍼블리싱, 웹앱 퍼블리싱, 플러터 앱 개발을 통해
        <br />
        효율적인 사용자 경험을 제공하는 실무 프로젝트를 진행했습니다
      </SubTitle>
      <ul className="project-tile-wrap">
        <ProjectTile
          logo={Logo1}
          title="대구광역시건축사회"
          cont="퍼블리싱 80%"
          type="web"
          devItems={devItems}
        />
        <ProjectTile
          logo={Logo2}
          title="대구경북과학기술원 포털"
          cont="퍼블리싱 100%"
          type="web"
          devItems={devItems}
        />
        <ProjectTile
          logo={Logo3}
          title="주식회사 MDA"
          cont="퍼블리싱 70%"
          type="web"
          devItems={devItems}
        />
        <ProjectTile
          logo={Logo4}
          title="KIDAN건축사"
          cont="퍼블리싱 70%"
          type="web"
          devItems={devItems}
        />
        <ProjectTile
          title="로타리 3700지구"
          cont="퍼블리싱 100%"
          type="webapp"
          devItems={devItems}
        />
        <ProjectTile
          title="청구고등학교 총동창회"
          cont="퍼블리싱 100%"
          type="webapp"
          devItems={devItems}
        />
        <ProjectTile
          title="100년기업 차세대 CEO 과정"
          cont="퍼블리싱 100%"
          type="webapp"
          devItems={devItems}
        />
        <ProjectTile
          title="감탄챌린지"
          cont="플러터 앱 개발 50%"
          type="flutter"
          devItems={devItems}
        />
        <ProjectTile
          title="대구광역시건축사회"
          cont="플러터 앱 개발 50%"
          type="flutter"
          devItems={devItems}
        />
        <ProjectTile
          title="알번역"
          cont="플러터 앱 개발 50%"
          type="flutter"
          devItems={devItems}
        />
      </ul>
    </section>
  );
}
export default WorkProjects;
