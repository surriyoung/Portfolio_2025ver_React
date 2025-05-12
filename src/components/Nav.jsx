import React from "react";

function Nav() {
  // 각 섹션의 id를 참조하여 스크롤 이동 함수 정의
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="sticky">
      <ul>
        <li onClick={scrollToTop}>
          <span></span>
          <span></span>
          <span></span>
        </li>
        <li onClick={() => scrollToSection("skills")}>Skills</li>
        <li onClick={() => scrollToSection("projects")}>Projects</li>
        <li onClick={() => scrollToSection("about")}>About</li>
      </ul>
    </nav>
  );
}

export default Nav;
