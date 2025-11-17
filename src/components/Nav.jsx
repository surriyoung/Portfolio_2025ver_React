import { useState, useEffect } from "react";

function Nav() {
  // 특정 클래스명을 기준으로 스크롤 이동
  const scrollToSection = (className) => {
    const section = document.querySelector(`.${className}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // class가 'observe-target'인 섹션들만 관찰
    const sections = document.querySelectorAll(".observe-target");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          const classList = visibleSections[0].target.classList;
          // 특정 기준 클래스명을 제외하고 원하는 섹션 이름만 추출
          const className = Array.from(classList).find(
            (cls) => cls !== "observe-target"
          );
          setActiveSection(className);
        }
      },
      {
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky">
      <ul>
        <li onClick={scrollToTop}>
          <span></span>
          <span></span>
          <span></span>
        </li>
        <li
          className={activeSection === "skills" ? "on" : ""}
          onClick={() => scrollToSection("skills")}
        >
          역량
        </li>
        <li
          className={activeSection === "about" ? "on" : ""}
          onClick={() => scrollToSection("about")}
        >
          프로필
        </li>
        <li
          className={activeSection === "projects" ? "on" : ""}
          onClick={() => scrollToSection("projects")}
        >
          웹 작업물
        </li>
        <li
          className={activeSection === "design" ? "on" : ""}
          onClick={() => scrollToSection("design")}
        >
           디자인
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
