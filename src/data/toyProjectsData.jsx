import Logo1 from "../assets/projects/toy/logo1.png";
import Logo2 from "../assets/projects/toy/logo2.png";
import Screenshot1 from "../assets/projects/toy/detail/detail1.png";
import Screenshot2 from "../assets/projects/toy/detail/detail2.png";

// devItems는 외부에서 주입받는 걸 추천합니다. 여기선 임시로 예시.
export const getToyProjects = (devItems) => [
  {
    logo: Logo1,
    title: "스카이덕디자인 푸시알림앱",
    cont: "플러터 앱 개발 100%",
    type: "flutter",
    design: "figma",
    devItems,
    details: {
      overview:
        "스카이덕디자인업체의 의뢰로 진행된 프로젝트입니다. PHP로 개발된 웹페이지에서 의뢰 신청 시, 앱에 푸시 알림이 전송되고 의뢰 내역이 실시간으로 표시되는 견적 알림 앱을 구현했습니다. Android용 APK 파일로 빌드하여 제공되었습니다",
      screenshot: Screenshot1,
      projectType: "외주 프로젝트",
    },
  },
  {
    logo: Logo2,
    title: "스타일가이드",
    cont: "리액트 100%",
    type: "react",
    design: "figma",
    devItems,
    details: {
      overview:
        "재사용 가능한 리액트 컴포넌트로 구성된 스타일가이드를 제작하여 퍼블리싱과 개발의 일관성과 효율성을 높였습니다.",
      screenshot: Screenshot2,
      projectType: "개인 프로젝트",
      shortcut: "https://surriyoung.github.io/HmDesignGuide/", // 예시 링크
    },
  },
];
