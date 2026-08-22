import ToolsCont from "../devtools/ToolsCont";

const TYPE_LABELS = {
  web: "웹 퍼블리싱",
  webapp: "웹앱 퍼블리싱",
  flutter: "플러터 앱 개발",
  sir: "그누보드 퍼블리싱",
  imweb: "아임웹 퍼블리싱",
  first: "퍼스트몰 퍼블리싱",
};

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
        <p>{TYPE_LABELS[type] || "리액트 프론트 개발"}</p>
        <span>{cont}</span>
      </div>
      <ToolsCont items={devItems} type={type} design={design} />
    </li>
  );
}

export default ProjectTile;