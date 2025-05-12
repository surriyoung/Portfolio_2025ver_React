import { useEffect } from "react";
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

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // 애니메이션 지속 시간
      once: true, // 스크롤 한번만 애니메이션
    });
  }, []);

  return (
    <>
      <Home />
      <Nav />
      <PowerSkills />
      <DevTools />
      <WorkProjects />
      <ToyProjects />
      <Profile />
    </>
  );
}

export default App;
