import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS 스타일

import "./App.css";
import Nav from "./components/Nav";
import DevTools from "./pages/DevTools";
import Home from "./pages/Home";
import PowerSkills from "./pages/PowerSkills";
import Profile from "./pages/Profile";
import ToyProjects from "./pages/ToyProjects";
import WorkProjects from "./pages/WorkProjects";
import WebDesign from "./pages/WebDesign";
import TopBtn from "./components/TopBtn";
import WebDesignDetailModal from "./components/webDesign/WebDesignDetailModal";

function App() {
  const [modalProject, setModalProject] = useState(null);

  const openModal = (project) => setModalProject(project);
  const closeModal = () => setModalProject(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Home />
      <Nav />
      <PowerSkills />
      <DevTools />
      <Profile />
      <WorkProjects />
      <ToyProjects />
      <WebDesign onOpenModal={openModal} />
      <TopBtn />
      <footer>감사합니다.</footer>
      {/* ⭐ 전역 모달 렌더링 영역 */}
      {modalProject && (
        <WebDesignDetailModal
          project={modalProject}
          onClose={closeModal}
        />
      )}
    </>
  );
}


export default App;
