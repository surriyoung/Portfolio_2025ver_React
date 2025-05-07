import SkillsContent from "../components/powerskills/SkillsContent";
import SubTitle from "../components/SubTitle";
import Title from "../components/Title";

const skillItems = [
  {
    image: "/src/assets/skills/skill1.png",
    title: "디자인 및 퍼블리싱",
    description:
      "Photoshop, Illustrator, Figma 등 다양한 디자인 툴을 능숙하게 다루며, 웹 퍼블리싱 경험을 통해 디자인과 개발의 경계를 넘나듭니다. UI/UX 디자인에서부터 최적화된 코드까지, 완성도 높은 결과물을 만들어냅니다.",
  },
  {
    image: "/src/assets/skills/skill2.png",
    title: "프론트엔드 기술",
    description:
      "Flutter와 React를 이용한 프론트엔드 개발 경험이 풍부합니다. 각 플랫폼의 특징을 이해하고, 사용자 친화적인 인터페이스를 구현합니다. 특히, React 환경 구축과 컴포넌트 설계를 통해 재사용 가능하고 확장성 있는 코드를 작성합니다.",
  },
  {
    image: "/src/assets/skills/skill3.png",
    title: "커뮤니케이션 및 협업",
    description:
      "Git, Slack, Notion을 활용한 협업 경험이 있으며, 다양한 직군과의 원활한 소통을 통해 프로젝트를 성공적으로 이끌었습니다. 기획, 디자인, 개발 등 여러 부서와 협업하며 효율적인 팀워크를 만들어 나갔습니다.",
  },
];

function PowerSkills() {
  return (
    <section data-aos="fade-up">
      <Title title="핵심역량" />
      <SubTitle>
        창의적인 디자인과 효율적인 개발을 결합하여,
        <br />
        사용자 경험을 최우선으로 고려한 솔루션을 제공합니다.
      </SubTitle>
      <SkillsContent items={skillItems} />
    </section>
  );
}
export default PowerSkills;
