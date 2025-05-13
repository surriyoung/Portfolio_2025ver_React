import ReactDOM from "react-dom";
import { useEffect } from "react";
import CloseIcon from "../../assets/icons/CloseIcon";
import ToolsCont from "../devtools/ToolsCont";

function ProjectDetailModal({ onClose, project }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const { logo, title, details, devItems, type, design } = project;
  const { shortcut } = details;

  return ReactDOM.createPortal(
    <div className="modal-bg">
      <div className="modal">
        <button className="close-btn icon-btn" onClick={onClose}>
          <CloseIcon />
        </button>
        <div className="modal-tit">
          <img src={logo} alt="로고" />
          <h5>{title}</h5>
        </div>
        <ul className="modal-cont">
          <li>
            <span className="tit">개요</span>
            <p>{details.overview}</p>
          </li>
          <li>
            <span className="tit">사용기술</span>
            <ToolsCont items={devItems} type={type} design={design} />
          </li>
          <li className="flex">
            <div>
              <span className="tit">작업유형</span>
              <p>{details.projectType}</p>
            </div>
            {shortcut && (
              <div>
                <span className="tit">관련 링크</span>
                <a href={shortcut} target="_blank" rel="noopener noreferrer">
                  <p>사이트</p>
                </a>
              </div>
            )}
          </li>
        </ul>
        <span className="line"></span>
        <img src={details.screenshot} alt="프로젝트 스크린샷" />
      </div>
    </div>,
    document.body
  );
}

export default ProjectDetailModal;
