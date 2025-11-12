import SubTitle from "../components/SubTitle";
import Title from "../components/Title";
import ToolsCont from "../components/devtools/ToolsCont.jsx";

const toolImages = import.meta.glob("../assets/tools/*.png", { eager: true });

const imageList = Object.entries(toolImages)
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
  "React",
  "Flutter",
  "Figma",
  "jQuery",
  "Vite",
  "VLLO",
  "그누보드5",
];

const devItems = imageList.map((img, index) => ({
  image: img.default, // Vite의 glob import는 객체 형태로 반환됨
  name: toolNames[index] || `툴 ${index + 1}`,
}));

function DevTools() {
  return (
    <section class="observe-target skills" data-aos="fade-up">
      <Title title="기술 스택" />
      <SubTitle>아래의 디자인 툴과 개발 기술을 활용합니다.</SubTitle>
      <ToolsCont items={devItems} />
    </section>
  );
}
export default DevTools;
