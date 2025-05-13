import ToolsCont from "../devtools/ToolsCont";

function ProjectTile({
  title,
  cont,
  logo,
  devItems,
  type,
  index,
  onClick,
  design,
}) {
  return (
    <li
      className="project-tile"
      {...(typeof index !== "undefined" ? { key: index } : {})}
      {...(onClick ? { onClick } : {})}
      {...(design ? { design } : {})}
    >
      <div className="project-tile-top">
        <img src={logo} alt={title} />
        <p>{title}</p>
        <p>
          {type === "web"
            ? "웹 퍼블리싱"
            : type === "webapp"
            ? "웹앱 퍼블리싱"
            : type === "flutter"
            ? "플러터 앱 개발"
            : "리액트 프론트 개발 "}
        </p>
        <span>{cont}</span>
      </div>
      <ToolsCont items={devItems} type={type} design={design} />
    </li>
  );
}
export default ProjectTile;
