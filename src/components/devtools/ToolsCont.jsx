function ToolsCont({ items, type = "all", design = "" }) {
  let filteredItems = [];

  if (type === "all") {
    // "all"일 경우 모든 툴을 표시
    filteredItems = items;
  } else if (type === "web" || type === "webapp") {
    filteredItems = items.slice(5, 8); // tool5.png ~ tool7.png
  } else if (type === "flutter") {
    filteredItems = items.slice(9, 10); // tool9.png
  } else if (type === "react") {
    filteredItems = items.slice(8, 9); // tool18.png
  } else if (type === "sir") {
    filteredItems = [items[5], items[6], items[7], items[14]];
  }

  // design 필터 추가
  if (design === "figma") {
    filteredItems = [...filteredItems, items[10]];
  } else if (design === "xd") {
    filteredItems = [...filteredItems, items[2]];
  }

  return (
    <ul className="tools-cont">
      {filteredItems.map((item, index) => (
        <li key={index}>
          <img src={item.image} alt={item.name} />
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
}
export default ToolsCont;
