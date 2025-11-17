import SkillsContent from "../components/powerskills/SkillsContent";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";
import Skill1 from "../assets/skills/skill1.png";
import Skill2 from "../assets/skills/skill2.png";
import Skill3 from "../assets/skills/skill3.png";
import Skill4 from "../assets/skills/skill4.png";

const skillItems = [
  {
    image: Skill1,
    title: "디자인 및 퍼블리싱",
    description:
      "Photoshop, Illustrator, Figma 등 다양한 디자인 툴을 능숙하게 다루며, 웹 퍼블리싱 경험을 통해 디자인과 개발의 경계를 넘나듭니다. UI/UX 디자인에서부터 최적화된 코드까지, 완성도 높은 결과물을 만들어냅니다.",
  },
  {
    image: Skill2,
    title: "프론트엔드 기술",
    description:
      "Flutter와 React를 이용한 프론트엔드 개발 경험이 풍부합니다. 각 플랫폼의 특징을 이해하고, 사용자 친화적인 인터페이스를 구현합니다. 특히, React 환경 구축과 컴포넌트 설계를 통해 재사용 가능하고 확장성 있는 코드를 작성합니다.",
  },
  {
    image: Skill3,
    title: "커뮤니케이션 및 협업",
    description:
      "Git, Slack, Notion을 활용한 협업 경험이 있으며, 다양한 직군과의 원활한 소통을 통해 프로젝트를 성공적으로 이끌었습니다. 기획, 디자인, 개발 등 여러 부서와 협업하며 효율적인 팀워크를 만들어 나갔습니다.",
  },
  {
    image: Skill4,
    title: "미디어 콘텐츠 제작",
    description:
      "대학교에서 미디어기술콘텐츠학을 전공하며 After Effects와 Premiere Pro를 활용한 영상 편집 기술을 배웠으며, 현재는 VLLO 앱을 이용해 간단한 컷 편집, 자막 추가, 배경음 삽입 등의 작업을 할 수 있습니다.",
  },
];

function PowerSkills() {
  return (
    <section className="observe-target skills" id="skills" data-aos="fade-up">
      <Title title="주요 강점" />
      <SubTitle>
        디자인부터 코드, 그리고 영상까지
        <br />
        사용자 경험을 완성하는 올인원 퍼블리셔입니다.
      </SubTitle>
      <SkillsContent items={skillItems} />
    </section>
  );
}
export default PowerSkills;
