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
        "스카이덕디자인업체의 의뢰로 진행된 프로젝트입니다. Flutter 앱에서 의뢰 신청 시 PHP 서버의 API를 호출하여 데이터를 DB에 저장하고, 동시에 푸시 알림을 전송하는 알림 기반 서비스입니다. 실시간 의뢰 처리와 사용자 알림을 연동하여 효율적인 요청 관리가 가능합니다. Android용 APK 파일로 빌드하여 제공되었습니다",
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
