function ToolsCont({ items, type = "all" }) {
  let filteredItems = [];

  if (type === "all") {
    // "all"일 경우 모든 툴을 표시
    filteredItems = items;
  } else if (type === "web" || type === "webapp") {
    filteredItems = items.slice(5, 9); // tool6.png ~ tool9.png
  } else if (type === "flutter") {
    filteredItems = items.slice(10, 11); // tool11.png
  } else if (type === "react") {
    filteredItems = items.slice(9, 10); // tool10.png
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
