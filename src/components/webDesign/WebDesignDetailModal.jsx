import React from "react";

function WebDesignDetailModal({ project, onClose }) {
  if (!project) return null;

  const { title, description, thumbnail, type } = project;

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className={`design-modal modal ${type === "bannerBlog" ? "banner" : ""}`} onClick={(e) => e.stopPropagation()}>
        <button class="close-btn icon-btn" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="black"></path>
          </svg>
        </button>
        <div className="modal-tit">
          <h5>{title}</h5>
        </div>

        <div className="modal-cont design-modal-cont">
          <span class="tit">개요</span>
          {description && (
            <div className="description">
              <p>{description}</p>
            </div>
          )}
          <span class="line"></span>
          {thumbnail && (
            <div className="image-single">
              <img src={thumbnail} alt={title} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WebDesignDetailModal;
