import ToolsCont from "../devtools/ToolsCont";

function ProjectTile({ title, cont, logo, devItems, type }) {
  return (
    <li className="project-tile">
      <div className="project-tile-top">
        <img src={logo} />
        <p>{title}</p>
        <p>
          {type === "web"
            ? "웹 퍼블리싱"
            : type === "webapp"
            ? "웹앱 퍼블리싱"
            : type === "flutter"
            ? "플러터 앱 개발"
            : "리액트 학습"}
        </p>
        <span>{cont}</span>
      </div>
      <ToolsCont items={devItems} type={type} />
    </li>
  );
}
export default ProjectTile;
