import React from "react";

function WebDesignTile({ thumbnail, title, client, category, tags, onClick }) {
  return (
    <li
      className="design-tile"
      onClick={onClick}
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="thumb-wrap">
        {thumbnail && <img src={thumbnail} alt={title} />}
      </div>
    </li>
  );
}

export default WebDesignTile;