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
import Logo12 from "../assets/projects/work/logo12.svg";
import Logo13 from "../assets/projects/work/logo13.svg";
import Logo14 from "../assets/projects/work/logo14.svg";
import Logo15 from "../assets/projects/work/logo15.svg";
import Logo16 from "../assets/projects/work/logo16.svg";
import Logo17 from "../assets/projects/work/logo17.svg";
import Screenshot1 from "../assets/projects/work/detail/detail1.png";
import Screenshot2 from "../assets/projects/work/detail/detail2.png";
import Screenshot3 from "../assets/projects/work/detail/detail3.png";
import Screenshot4 from "../assets/projects/work/detail/detail4.png";
import Screenshot5 from "../assets/projects/work/detail/detail5.png";
import Screenshot6 from "../assets/projects/work/detail/detail6.png";
import Screenshot7 from "../assets/projects/work/detail/detail7.png";
import Screenshot8 from "../assets/projects/work/detail/detail8.png";
import Screenshot9 from "../assets/projects/work/detail/detail9.png";
import Screenshot10 from "../assets/projects/work/detail/detail10.png";
import Screenshot11 from "../assets/projects/work/detail/detail11.png";
// import Screenshot12 from "../assets/projects/work/detail/detail12.png";
import Screenshot13 from "../assets/projects/work/detail/detail13.png";

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
    cont: "퍼블리싱 50%",
    type: "web",
    devItems: devItems,
    details: {
      overview:
        "대구광역시건축사 사이트의 퍼블리싱을 맡았으며, HTML과 CSS로 사이트의 기본 레이아웃과 기능을 구현했습니다. 디자인팀과 협업하여 UI/UX를 최적화하고, 전반적인 웹 페이지 구현을 담당했습니다. 팀원들과의 원활한 협업을 통해 사이트를 완성했습니다.",
      screenshot: "상세 이미지 경로", // 예시
      projectType: "실무 프로젝트",
      team: "디자인1, 프론트2, 백엔드2",
      shortcut: "https://kirasys.kr/",
      screenshot: Screenshot1,
    },
  },
  {
    logo: Logo2,
    title: "대구경북과학기술원 포털",
    cont: "퍼블리싱 100%",
    type: "web",
    devItems: devItems,
    details: {
      overview:
        "대구경북과학기술원 포털의 전 페이지를 퍼블리싱하였으며, HTML과 CSS를 활용해 전체 레이아웃과 UI 요소를 구현했습니다. 프로젝트 초기 기획에 맞춰 사이드 영역의 디자인 개선 및 리뉴얼 작업도 직접 진행하였고, 디자인팀과 긴밀히 협업하여 시각적 완성도를 높였습니다. 퍼블리싱과 동시에 일부 기능 구현도 담당하며, 사이트의 전반적인 품질 향상에 기여했습니다.",
      screenshot: "상세 이미지 경로", // 예시
      projectType: "실무 프로젝트",
      team: "디자인1, 프론트1",
      shortcut: "https://my.dgist.ac.kr/",
      screenshot: Screenshot2,
    },
  },
  {
    logo: Logo3,
    title: "주식회사 MDA",
    cont: "퍼블리싱 70%",
    type: "web",
    devItems: devItems,
    details: {
      overview:
        "MDA 사이트의 퍼블리싱을 맡아 HTML과 CSS를 이용해 페이지를 구현했습니다. 디자인팀과 협력하여 UI를 맞추고, 페이지 내의 다양한 기능들을 퍼블리싱하며 사이트를 완성했습니다.",
      screenshot: "상세 이미지 경로", // 예시
      projectType: "실무 프로젝트",
      team: "디자인1, 프론트1, 백엔드1",
      screenshot: Screenshot3,
    },
  },
  {
    logo: Logo4,
    title: "KIDAN건축사",
    cont: "퍼블리싱 70%",
    type: "web",
    devItems: devItems,
    details: {
      overview:
        "KIDAN건축사 사이트의 퍼블리싱을 전담하였고, HTML과 CSS로 레이아웃과 디자인을 구현했습니다. 디자인팀과 협력하여 사이트의 UI/UX를 개선하고, 프론트엔드 개발자로서 필요한 기능들을 구현했습니다.",
      screenshot: "상세 이미지 경로", // 예시
      projectType: "실무 프로젝트",
      team: "디자인1, 프론트1, 백엔드1",
      shortcut: "http://kidan.kr/",
      screenshot: Screenshot4,
    },
  },
  {
    logo: Logo5,
    title: "로타리 3700지구",
    cont: "퍼블리싱 100%",
    type: "webapp",
    devItems: devItems,
    details: {
      overview:
        "로타리 3700지구 웹앱의 퍼블리싱을 맡아 HTML과 CSS로 사이트의 레이아웃을 구현하고, 필요한 기능들을 추가했습니다. 백엔드 개발자와 협업하여 데이터베이스 연동을 처리하며, 사이트의 성능을 최적화하기 위한 작업을 수행했습니다.",
      screenshot: "상세 이미지 경로", // 예시
      projectType: "실무 프로젝트",
      team: "프론트1, 백엔드1",
      shortcut:
        "https://play.google.com/store/apps/details?id=com.flash21.rotary_3700",

      screenshot: Screenshot5,
    },
  },
  {
    logo: Logo6,
    title: "청구고등학교 총동창회",
    cont: "퍼블리싱 100%",
    type: "webapp",
    devItems: devItems,
    details: {
      overview:
        "청구고등학교 총동창회 웹앱을 퍼블리싱했으며, HTML과 CSS로 웹 페이지를 구현하고, 사용자 인터페이스(UI)를 최적화했습니다. 백엔드 개발자와 협력하여 앱의 동작을 구현했습니다.",
      screenshot: "상세 이미지 경로", // 예시
      projectType: "실무 프로젝트",
      team: "프론트1, 백엔드1",
      shortcut:
        "https://play.google.com/store/apps/details?id=com.resoft.chunggu",
      screenshot: Screenshot6,
    },
  },
  {
    logo: Logo7,
    title: "100년기업 차세대 CEO 과정",
    cont: "퍼블리싱 100%",
    type: "webapp",
    devItems: devItems,
    details: {
      overview:
        "차세대 CEO 과정 웹앱의 퍼블리싱을 맡아 HTML과 CSS로 웹 페이지를 구현했습니다. 백엔드 팀과 협력하여 서버와의 연동을 처리하고, 전반적인 UI/UX를 개선하는 작업을 진행했습니다.",
      screenshot: "상세 이미지 경로", // 예시
      projectType: "실무 프로젝트",
      team: "프론트1, 백엔드1",
      shortcut:
        "https://play.google.com/store/apps/details?id=com.flash21.hundred_ceo",
      screenshot: Screenshot7,
    },
  },
  {
    logo: Logo8,
    title: "감탄챌린지",
    cont: "플러터 앱 개발 50%",
    type: "flutter",
    devItems: devItems,
    details: {
      overview:
        "감탄챌린지 플러터 앱 개발에 참여하여 UI 디자인과 주요 기능을 구현하였으며, Dio 패키지를 활용해 백엔드 API와의 연동을 담당했습니다. 사용자 경험을 고려한 직관적인 화면 구성을 통해 앱의 사용성을 높였고, 성능 개선을 위해 백엔드 개발자와 긴밀하게 협업했습니다.",
      screenshot: "상세 이미지 경로", // 예시
      projectType: "실무 프로젝트",
      team: "프론트2, 백엔드1",
      shortcut: "https://play.google.com/store/apps/details?id=com.resoft.gcto",
      screenshot: Screenshot8,
    },
  },
  {
    logo: Logo9,
    title: "대구광역시건축사회",
    cont: "플러터 앱 개발 30%",
    type: "flutter",
    devItems: devItems,
    details: {
      overview:
        " 대구광역시건축사회 앱의 플러터 개발을 맡아, 주요 화면과 기능을 구현했습니다. 디자인팀과 협력하여 앱 UI/UX를 개선했습니다.",
      screenshot: "상세 이미지 경로", // 예시
      projectType: "실무 프로젝트",
      team: "프론트3, 백엔드1",
      shortcut:
        "https://play.google.com/store/apps/details?id=com.flash21.diora_gamli",
      screenshot: Screenshot9,
    },
  },
  {
    logo: Logo10,
    title: "알번역",
    cont: "플러터 앱 개발 50%",
    type: "flutter",
    devItems: devItems,
    details: {
      overview:
        "Flutter를 활용하여 사용자 인터페이스(UI) 관련 기능을 구현하고, 백엔드 팀과 협력하여 데이터 처리 및 API 연동 작업을 수행했습니다. 기존 UI의 사용성을 개선하기 위해 일부 화면의 UI 리디자인도 직접 진행했습니다.",
      screenshot: "상세 이미지 경로", // 예시
      projectType: "실무 프로젝트",
      team: "프론트2, 백엔드1",
      shortcut:
        "https://play.google.com/store/apps/details?id=com.flash21.eggtranslate",
      screenshot: Screenshot10,
    },
  },
  {
    logo: Logo11,
    title: "대구공업고등학교 총동문회",
    cont: "플러터 앱 개발 50%",
    type: "flutter",
    devItems: devItems,
    details: {
      overview:
        "대구공업고등학교 총동문회 앱의 플러터 앱 개발을 맡아 주요 화면을 구현했습니다. Dio 패키지를 사용하여 API 연동을 진행하였고, 백엔드와의 협업을 통해 데이터베이스와의 통신을 원활하게 처리했습니다. 또한, UI/UX 최적화를 통해 사용자 친화적인 앱을 구축하고자 노력했습니다.",
      screenshot: "상세 이미지 경로", // 예시
      projectType: "실무 프로젝트",
      team: "프론트2, 백엔드1",
      shortcut:
        "https://play.google.com/store/apps/details?id=com.flash21.all_daegong_android",
      screenshot: Screenshot11,
    },
  },
  {
    logo: Logo12,
    title: "영롱한마케팅 홈페이지",
    cont: "디자인 100%, 퍼블리싱 100%",
    type: "web",
    devItems: devItems,
    details: {
      overview:
        "영롱한마케팅 홈페이지의 로고디자인, 웹디자인 및 퍼블리싱을 맡아 HTML과 CSS를 이용해 페이지를 구현했습니다.",
      screenshot: "상세 이미지 경로", // 예시
      projectType: "실무 프로젝트",
      shortcut:
        "https://ylmarketing.co.kr/",
      screenshot: Screenshot3,
    },
  },
  {
    logo: Logo13,
    title: "영롱한의원 홈페이지",
    cont: "디자인 100%, 퍼블리싱 100%",
    type: "web",
    devItems: devItems,
    details: {
      overview:
        "영롱한마케팅 홈페이지의 로고디자인, 웹디자인 및 퍼블리싱을 맡아 HTML과 CSS를 이용해 페이지를 구현했습니다.",
      screenshot: "상세 이미지 경로", // 예시
      projectType: "실무 프로젝트",
      shortcut:
        "https://ylclinic2.ylmarketing.kr/",
      screenshot: Screenshot3,
    },
  },
  {
    logo: Logo14,
    title: "웹프림 홈페이지",
    cont: "디자인 50%, 퍼블리싱 100%",
    type: "web",
    devItems: devItems,
    details: {
      overview:
        "웹프림 사이트의 로고디자인, 웹디자인 및 퍼블리싱을 맡아 HTML과 CSS를 이용해 페이지를 구현했습니다. 디자인팀과 협력하여 UI를 맞추고, 페이지 내의 다양한 기능들을 퍼블리싱하며 사이트를 완성했습니다.",
      screenshot: "상세 이미지 경로", // 예시
      projectType: "실무 프로젝트",
      team: "디자인1, 프론트1, 백엔드1",
      shortcut:
        "https://webpreme.com/",
      screenshot: Screenshot3,
    },
  },
  {
    logo: Logo14,
    title: "웹프림 내부패널",
    cont: "디자인 100%, 퍼블리싱 100%",
    type: "web",
    devItems: devItems,
    details: {
      overview:
        "웹프림 내부패널의 디자인 및 퍼블리싱을 맡아 HTML과 CSS를 이용해 페이지를 구현했습니다.",
      screenshot: "상세 이미지 경로", // 예시
      projectType: "실무 프로젝트",
      shortcut:
        "https://webpreme.com/portfolio/46",
      screenshot: Screenshot13,
    },
  },
  {
    logo: Logo15,
    title: "브리달메이",
    cont: "디자인 100%, 퍼블리싱 100%",
    type: "web",
    devItems: devItems,
    details: {
      overview:
        "브리달메이 홈페이지의 로고디자인, 웹디자인 및 퍼블리싱을 맡아 HTML과 CSS를 이용해 페이지를 구현했습니다.",
      screenshot: "상세 이미지 경로", // 예시
      projectType: "실무 프로젝트",
      shortcut:
        "https://bridalmay.webpreme.net/",
      screenshot: Screenshot13,
    },
  },
  {
    logo: Logo16,
    title: "화장품쇼핑몰(진행중)",
    cont: "디자인 100%, 퍼블리싱 100%",
    type: "web",
    devItems: devItems,
    details: {
      overview:
        "화장품 쇼핑몰 홈페이지의 디자인 및 퍼블리싱을 맡아 HTML과 CSS를 이용해 페이지를 구현했습니다.",
      screenshot: "상세 이미지 경로", // 예시
      projectType: "실무 프로젝트",
      shortcut:
        "https://webpreme.com/portfolio/56",
      screenshot: Screenshot13,
    },
  },
  {
    logo: Logo17,
    title: "로얄엔스",
    cont: "퍼블리싱 100%",
    type: "web",
    devItems: devItems,
    details: {
      overview:
        "화장품 쇼핑몰 홈페이지의 퍼블리싱을 맡아 HTML과 CSS를 이용해 페이지를 구현했습니다. 디자인팀과 협력하여 UI를 맞추고, 페이지 내의 다양한 기능들을 퍼블리싱하며 사이트를 완성했습니다.",
      screenshot: "상세 이미지 경로", // 예시
      projectType: "실무 프로젝트",
      shortcut:
        "https://renewal.royal-anns.com/",
      screenshot: Screenshot13,
    },
  },
];

export default workProjectsData;
