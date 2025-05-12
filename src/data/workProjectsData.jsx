// src/data/workProjectsData.jsx
import Logo1 from "../assets/projects/work/logo1.svg";
import Logo2 from "../assets/projects/work/logo2.svg";
import Logo3 from "../assets/projects/work/logo3.svg";
import Logo4 from "../assets/projects/work/logo4.svg";
import Logo5 from "../assets/projects/work/logo5.svg";
import Logo6 from "../assets/projects/work/logo6.svg";
import Logo7 from "../assets/projects/work/logo7.svg";
import Logo8 from "../assets/projects/work/logo8.png";
import Logo9 from "../assets/projects/work/logo9.png";
import Logo10 from "../assets/projects/work/logo10.png";
import Logo11 from "../assets/projects/work/logo11.png";

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
  "React",
  "Flutter",
  "Figma",
  "jQueruy",
  "Vite",
];

const devItems = devList.map((img, index) => ({
  image: img.default, // Vite의 glob import는 객체 형태로 반환됨
  name: toolNames[index] || `툴 ${index + 1}`,
}));

const workProjectsData = [
  {
    logo: Logo1,
    title: "대구광역시건축사회",
    cont: "퍼블리싱 80%",
    type: "web",
    devItems: devItems,
  },
  {
    logo: Logo2,
    title: "대구경북과학기술원 포털",
    cont: "퍼블리싱 100%",
    type: "web",
    devItems: devItems,
  },
  {
    logo: Logo3,
    title: "주식회사 MDA",
    cont: "퍼블리싱 70%",
    type: "web",
    devItems: devItems,
  },
  {
    logo: Logo4,
    title: "KIDAN건축사",
    cont: "퍼블리싱 70%",
    type: "web",
    devItems: devItems,
  },
  {
    logo: Logo5,
    title: "로타리 3700지구",
    cont: "퍼블리싱 100%",
    type: "webapp",
    devItems: devItems,
  },
  {
    logo: Logo6,
    title: "청구고등학교 총동창회",
    cont: "퍼블리싱 100%",
    type: "webapp",
    devItems: devItems,
  },
  {
    logo: Logo7,
    title: "100년기업 차세대 CEO 과정",
    cont: "퍼블리싱 100%",
    type: "webapp",
    devItems: devItems,
  },
  {
    logo: Logo8,
    title: "감탄챌린지",
    cont: "플러터 앱 개발 50%",
    type: "flutter",
    devItems: devItems,
  },
  {
    logo: Logo9,
    title: "대구광역시건축사회",
    cont: "플러터 앱 개발 30%",
    type: "flutter",
    devItems: devItems,
  },
  {
    logo: Logo10,
    title: "알번역",
    cont: "플러터 앱 개발 50%",
    type: "flutter",
    devItems: devItems,
  },
  {
    logo: Logo11,
    title: "대구공업고등학교 총동문회",
    cont: "플러터 앱 개발 50%",
    type: "flutter",
    devItems: devItems,
  },
];

export default workProjectsData;
