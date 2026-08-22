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
import Logo18 from "../assets/projects/work/logo18.svg";
import Logo19 from "../assets/projects/work/logo19.svg";
import Logo20 from "../assets/projects/work/logo20.svg";
import Logo21 from "../assets/projects/work/logo21.png";
import Logo22 from "../assets/projects/work/logo22.png";
import Logo23 from "../assets/projects/work/logo23.png";
import Logo24 from "../assets/projects/work/logo24.svg";
import Logo25 from "../assets/projects/work/logo25.svg";
import Logo26 from "../assets/projects/work/logo26.svg";
import Logo27 from "../assets/projects/work/logo27.webp";
import Logo28 from "../assets/projects/work/logo28.png";
import Logo29 from "../assets/projects/work/logo29.svg";
import Logo30 from "../assets/projects/work/logo30.svg";
import Logo31 from "../assets/projects/work/logo31.svg";
import Logo32 from "../assets/projects/work/logo32.svg";
import Logo33 from "../assets/projects/work/logo33.svg";


import NoImg from "../assets/projects/work/detail/noimg.png";
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

import Screenshot17 from "../assets/projects/work/detail/detail17.webp";
import Screenshot18 from "../assets/projects/work/detail/detail18.webp";
import Screenshot19 from "../assets/projects/work/detail/detail19.webp";
import Screenshot20 from "../assets/projects/work/detail/detail20.webp";
import Screenshot21 from "../assets/projects/work/detail/detail21.webp";
import Screenshot22 from "../assets/projects/work/detail/detail22.webp";
import Screenshot23 from "../assets/projects/work/detail/detail23.webp";
import Screenshot24 from "../assets/projects/work/detail/detail24.webp";
import Screenshot25 from "../assets/projects/work/detail/detail25.webp";
import Screenshot26 from "../assets/projects/work/detail/detail26.webp";
import Screenshot27 from "../assets/projects/work/detail/detail27.webp";
import Screenshot28 from "../assets/projects/work/detail/detail28.webp";
import Screenshot29 from "../assets/projects/work/detail/detail29.webp";
import Screenshot30 from "../assets/projects/work/detail/detail30.webp";
import Screenshot31 from "../assets/projects/work/detail/detail31.webp";
import Screenshot32 from "../assets/projects/work/detail/detail32.webp";
import Screenshot33 from "../assets/projects/work/detail/detail33.webp";

import webDesign05 from "../assets/design/web-design/web-design05.png";
import webDesign06 from "../assets/design/web-design/web-design06.png";
import webDesign07 from "../assets/design/web-design/web-design07.png";
import webDesign08 from "../assets/design/web-design/web-design08.png";
import webDesign09 from "../assets/design/web-design/web-design09.png";
import webDesign10 from "../assets/design/web-design/web-design10.png";

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
  "jQuery",
  "Vite",
  "VLLO",
  "그누보드5",
  "카페24",
  "아임웹",
  "퍼스트몰",
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
      
      projectType: "반응형 웹사이트 제작",
      // team: "디자인1, 프론트2, 백엔드2",
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
      
      projectType: "반응형 웹사이트 제작",
      // team: "디자인1, 프론트1",
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
      
      projectType: "반응형 웹사이트 제작",
      // team: "디자인1, 프론트1, 백엔드1",
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
      
      projectType: "반응형 웹사이트 제작",
      // team: "디자인1, 프론트1, 백엔드1",
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
      
      projectType: "웹앱 제작",
      // team: "프론트1, 백엔드1",
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
      
      projectType: "웹앱 제작",
      // team: "프론트1, 백엔드1",
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
      
      projectType: "웹앱 제작",
      // team: "프론트1, 백엔드1",
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
      
      projectType: "앱 제작",
      // team: "프론트2, 백엔드1",
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
      
      projectType: "앱 제작",
      // team: "프론트3, 백엔드1",
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
    design: "figma",
    details: {
      overview:
        "Flutter를 활용하여 사용자 인터페이스(UI) 관련 기능을 구현하고, 백엔드 팀과 협력하여 데이터 처리 및 API 연동 작업을 수행했습니다. 기존 UI의 사용성을 개선하기 위해 일부 화면의 UI 리디자인도 직접 진행했습니다.",
      
      projectType: "앱 제작",
      // team: "프론트2, 백엔드1",
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
      
      projectType: "앱 제작",
      // team: "프론트2, 백엔드1",
      shortcut:
        "https://play.google.com/store/apps/details?id=com.flash21.all_daegong_android",
      screenshot: Screenshot11,
    },
  },
  {
    logo: Logo12,
    title: "영롱한마케팅 홈페이지",
    cont: "디자인 100%, 퍼블리싱 100%",
    type: "sir",
    design: "figma",
    devItems: devItems,
    details: {
      overview:
        "영롱한마케팅 홈페이지의 로고디자인, 웹디자인 및 퍼블리싱을 맡아 HTML과 CSS를 이용해 페이지를 구현했습니다.",
      
      projectType: "반응형 웹사이트 제작",
      shortcut:
        "https://ylmarketing.co.kr/",
      screenshot: webDesign05,
    },
  },
  {
    logo: Logo13,
    title: "영롱한의원 홈페이지",
    cont: "디자인 100%, 퍼블리싱 100%",
    type: "sir",
    design: "figma",
    devItems: devItems,
    details: {
      overview:
        "영롱한마케팅 홈페이지의 로고디자인, 웹디자인 및 퍼블리싱을 맡아 HTML과 CSS를 이용해 페이지를 구현했습니다.",
      
      projectType: "반응형 웹사이트 제작",
      shortcut:
        "https://ylclinic2.ylmarketing.kr/",
      screenshot: webDesign06,
    },
  },
  {
    logo: Logo14,
    title: "웹프림 홈페이지",
    cont: "디자인 50%, 퍼블리싱 100%",
    type: "sir",
    design: "figma",
    devItems: devItems,
    details: {
      overview:
        "웹프림 사이트의 로고디자인, 웹디자인 및 퍼블리싱을 맡아 HTML과 CSS를 이용해 페이지를 구현했습니다. 디자인팀과 협력하여 UI를 맞추고, 페이지 내의 다양한 기능들을 퍼블리싱하며 사이트를 완성했습니다.",
      
      projectType: "반응형 웹사이트 제작",
      // team: "디자인1, 프론트1, 백엔드1",
      shortcut:
        "https://webpreme.com/",
      screenshot: webDesign07,
    },
  },
  {
    logo: Logo14,
    title: "웹프림 내부패널",
    cont: "디자인 100%, 퍼블리싱 100%",
    type: "sir",
    design: "figma",
    devItems: devItems,
    details: {
      overview:
        "웹프림 내부패널의 디자인 및 퍼블리싱을 맡아 HTML과 CSS를 이용해 페이지를 구현했습니다.",
      
      projectType: "반응형 웹사이트 제작",
      shortcut:
        "https://webpreme.com/portfolio/46",
      screenshot: webDesign08,
    },
  },
  {
    logo: Logo15,
    title: "브리달메이",
    cont: "디자인 100%, 퍼블리싱 100%",
    type: "sir",
    design: "figma",
    devItems: devItems,
    details: {
      overview:
        "브리달메이 홈페이지의 로고디자인, 웹디자인 및 퍼블리싱을 맡아 HTML과 CSS를 이용해 페이지를 구현했습니다.",
      
      projectType: "반응형 웹사이트 제작",
      shortcut:
        "https://bridalmay.webpreme.net/",
      screenshot: webDesign09,
    },
  },
  {
    logo: Logo16,
    title: "화장품쇼핑몰(진행중)",
    cont: "디자인 100%, 퍼블리싱 100%",
    type: "sir",
    design: "figma",
    devItems: devItems,
    details: {
      overview:
        "화장품 쇼핑몰 홈페이지의 디자인 및 퍼블리싱을 맡아 HTML과 CSS를 이용해 페이지를 구현했습니다.",
      
      projectType: "반응형 웹사이트 제작",
      shortcut:
        "https://webpreme.com/portfolio/56",
      screenshot: webDesign10,
    },
  },
  {
    logo: Logo17,
    title: "로얄엔스",
    cont: "퍼블리싱 100%",
    type: "sir",
    devItems: devItems,
    details: {
      overview:
        "로얄엔스 홈페이지의 퍼블리싱을 맡아 HTML과 CSS를 이용해 페이지를 구현했습니다. 디자인팀과 협력하여 UI를 맞추고, 페이지 내의 다양한 기능들을 퍼블리싱하며 사이트를 완성했습니다.",
      
      projectType: "반응형 웹사이트 제작",
      shortcut:
        "https://royal-anns.com/",
      screenshot: Screenshot17,
    },
  },
  {
    logo: Logo18,
    title: "프리리셀아이티",
    cont: "퍼블리싱 100%",
    type: "sir",
    devItems: devItems,
    details: {
      overview:
        "프리리셀아이티의 퍼블리싱을 맡아 HTML과 CSS를 이용해 페이지를 구현했습니다. 디자인팀과 협력하여 UI를 맞추고, 페이지 내의 다양한 기능들을 퍼블리싱하며 사이트를 완성했습니다.",
      
      projectType: "반응형 웹사이트 제작",
      shortcut:
        "https://frsell.kr/",
      screenshot: Screenshot18,
    },
  },{
    logo: Logo19,
    title: "다이렉트팜",
    cont: "디자인 100%, 퍼블리싱 100%",
    type: "sir",
    design: "figma",
    devItems: devItems,
    details: {
      overview:
        "다이렉트팜 웹 퍼블리싱 및 Flutter 기반 웹앱 래핑 작업을 진행하여 플랫폼 전반의 UI 최적화와 모바일 연동을 구현했습니다.",
      projectType: "반응형 웹사이트, 웹앱 제작",
      shortcut: "https://directfarm.co.kr/",
      screenshot: Screenshot19,
    },
  },
  {
    logo: Logo20,
    title: "dunamismusic",
    cont: "퍼블리싱 100%",
    type: "sir",
    devItems: devItems,
    details: {
      overview:
        "dunamismusic 웹 퍼블리싱 및 모바일 뷰 최적화를 진행하였으며 Flutter 기반 웹앱 환경을 구성했습니다.",
      projectType: "반응형 웹사이트 제작",
      shortcut: "https://dunamismusic.net/",
      screenshot: Screenshot20,
    },
  },
  {
    logo: Logo21,
    title: "Goodsen",
    cont: "디자인 100%, 퍼블리싱 100%",
    type: "imweb",
    design: "figma",
    devItems: devItems,
    details: {
      overview:
        "Goodsen 아임웹 기반 웹사이트의 디자인 및 반응형 레이아웃 구현을 전담했습니다.",
      projectType: "반응형 웹사이트 제작",
      shortcut: "https://teamgoodsen.imweb.me/",
      screenshot: Screenshot21,
    },
  },
  {
    logo: Logo22,
    title: "진바이크",
    cont: "퍼블리싱 100%",
    type: "sir",
    devItems: devItems,
    details: {
      overview:
        "진바이크 홈페이지의 반응형 UI 퍼블리싱 및 헤더, 내비게이션, 제휴 링크 구조 개선 작업을 진행했습니다.",
      projectType: "반응형 웹사이트 제작",
      shortcut: "https://jinbike.imweb.me/",
      screenshot: Screenshot22,
    },
  },
  {
    logo: Logo23,
    title: "팝팝마켓",
    cont: "디자인 100%, 퍼블리싱 100%",
    type: "first",
    design: "figma",
    devItems: devItems,
    details: {
      overview:
        "팝팝마켓 공동구매 프로모션 캠페인 및 웹 페이지 디자인과 반응형 퍼블리싱을 전담하여 구현했습니다.",
      projectType: "반응형 웹사이트 제작",
      shortcut: "https://poppopmarket.com/",
      screenshot: Screenshot23,
    },
  },
  {
    logo: Logo24,
    title: "리핏의원",
    cont: "퍼블리싱 100%",
    type: "web",
    devItems: devItems,
    details: {
      overview:
        "클리닉 웹사이트의 반응형 UI 퍼블리싱, 시술 안내 맞춤 스와이퍼 및 위치 안내 지도 연동 작업을 수행했습니다.",
      projectType: "반응형 웹사이트 제작",
      shortcut: "https://refitclinic.com/",
      screenshot: Screenshot24,
    },
  },
  {
    logo: Logo25,
    title: "스테이에라",
    cont: "퍼블리싱 100%",
    type: "web",
    devItems: devItems,
    details: {
      overview:
        "STAYERA 플랫폼의 메뉴 아키텍처, 반응형 필터 시스템 및 가입 폼 퍼블리싱과 Flutter 기반 모바일 웹뷰 앱을 제작 및 배포했습니다.",
      projectType: "반응형 웹사이트, 웹앱 제작",
      shortcut: "https://stayera.app/ko/",
      screenshot: Screenshot25,
    },
  },
  {
    logo: Logo26,
    title: "호텔라벨라",
    cont: "퍼블리싱 100%",
    type: "web",
    devItems: devItems,
    details: {
      overview:
        "호텔라벨라 홈페이지의 UI/UX 디자인 및 반응형 웹 퍼블리싱을 전담하여 숙소 안내와 편의시설 소개 페이지를 완성했습니다.",
      projectType: "반응형 웹사이트 제작",
      shortcut: "https://hotellabella.com/",
      screenshot: Screenshot26,
    },
  },
  {
    logo: Logo27,
    title: "JHauto 솔루션",
    cont: "퍼블리싱 100%",
    type: "web",
    devItems: devItems,
    details: {
      overview:
        "JHauto 솔루션 사이트의 전반적인 반응형 웹 퍼블리싱 및 기능 인터페이스 최적화를 진행했습니다.",
      projectType: "반응형 웹사이트 제작",
      shortcut: "https://jhcar.webpreme.net/adm",
      screenshot: Screenshot27,
    },
  },
  {
    logo: Logo28,
    title: "한국교통장애인협회경북협회",
    cont: "퍼블리싱 100%",
    type: "web",
    devItems: devItems,
    details: {
      overview:
        "경북협회 사이트 리뉴얼 및 반응형 UI 퍼블리싱, 동적 게시판 연동 및 스와이퍼/사이트맵 레이아웃을 구축했습니다.",
      projectType: "반응형 웹사이트 제작",
      shortcut: "https://kb.gyotong.org/",
      screenshot: Screenshot28,
    },
  },
  {
    logo: Logo29,
    title: "GT KOREA",
    cont: "퍼블리싱 100%",
    type: "web",
    devItems: devItems,
    details: {
      overview:
        "GT KOREA 기업 웹사이트의 반응형 레이아웃 퍼블리싱 및 브랜드 소개 페이지를 제작했습니다.",
      projectType: "반응형 웹사이트, 웹앱 제작",
      shortcut: "https://msgcom.co.kr/",
      screenshot: Screenshot29,
    },
  },
  {
    logo: Logo30,
    title: "대치동리즈집현전원격학원",
    cont: "퍼블리싱 100%",
    type: "web",
    devItems: devItems,
    details: {
      overview:
        "온라인 원격학원 웹사이트의 UI 디자인과 반응형 퍼블리싱을 맡아 교육 과정 안내 및 수강 정보 페이지를 구현했습니다.",
      projectType: "반응형 웹사이트 제작",
      shortcut: "https://jpjclass.com/",
      screenshot: Screenshot30,
    },
  },
  {
    logo: Logo31,
    title: "경상북도경제진흥원",
    cont: "퍼블리싱 100%",
    type: "web",
    devItems: devItems,
    details: {
      overview:
        "경상북도경제진흥원 관련 웹 서비스의 UI 반응형 퍼블리싱 및 주요 안내 컴포넌트를 표준에 맞춰 개발했습니다.",
      projectType: "반응형 웹사이트 제작",
      shortcut: "https://korlogistics.gepa.kr/",
      screenshot: Screenshot31,
    },
  },
  {
    logo: Logo32,
    title: "사이트이지",
    cont: "퍼블리싱 100%",
    type: "web",
    devItems: devItems,
    details: {
      overview:
        "사이트이지 플랫폼의 웹 UI/UX 디자인 및 반응형 레이아웃 퍼블리싱을 전담했습니다.",
      projectType: "반응형 웹사이트 제작",
      shortcut: "https://site2z.com/",
      screenshot: Screenshot32,
    },
  },
  {
    logo: Logo33,
    title: "HANS REALTY",
    cont: "퍼블리싱 100%",
    type: "web",
    devItems: devItems,
    details: {
      overview:
        "HANS REALTY 부동산 웹사이트의 메인/서브 UI 디자인 및 매물 안내 반응형 퍼블리싱을 진행했습니다.",
      projectType: "반응형 웹사이트 제작",
      shortcut: "https://hansrealty.webpreme.net/",
      screenshot: Screenshot33,
    },
  },
];

export default workProjectsData;