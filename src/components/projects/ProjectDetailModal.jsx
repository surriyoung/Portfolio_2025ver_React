import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import CloseIcon from "../../assets/icons/CloseIcon";
import ToolsCont from "../devtools/ToolsCont";
import Loading from "../Loading";

function ProjectDetailModal({ onClose, project }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  const { logo, title, details, devItems, type, design } = project;
  const { shortcut } = details;

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("modal-bg")) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className="modal-bg" onClick={handleBackgroundClick}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {/* 닫기 버튼은 항상 보여줌 */}
        <button className="close-btn icon-btn" onClick={onClose}>
          <CloseIcon />
        </button>

        <>
          <div className="modal-tit">
            <img src={logo} alt="로고" />
            <h5>{title}</h5>
          </div>
          <ul className="modal-cont">
            <li>
              <span className="tit">개요</span>
              <p>{details.overview}</p>
            </li>
            <li className="flex">
              <div>
                <span className="tit">작업유형</span>
                <p>{details.projectType}</p>
              </div>
              {details.team && (
                <div>
                  <span className="tit">참여인원</span>
                  <p>{details.team}</p>
                </div>
              )}
              {shortcut && (
                <div>
                  <span className="tit">관련 링크</span>
                  <a href={shortcut} target="_blank" rel="noopener noreferrer">
                    {type === "webapp" || type === "flutter" ? (
                      <p>다운로드페이지</p>
                    ) : (
                      <p>사이트</p>
                    )}
                  </a>
                </div>
              )}
            </li>
            <li>
              <span className="tit">사용기술</span>
              <ToolsCont items={devItems} type={type} design={design} />
            </li>
          </ul>
          <span className="line"></span>
          {/* 로딩 중이면 로딩 컴포넌트, 아니면 실제 내용 표시 */}
          {isLoading ? (
            <div className="modal-loading">
              <Loading />
            </div>
          ) : (
            <img src={details.screenshot} alt="프로젝트 스크린샷" />
          )}
        </>
      </div>
    </div>,
    document.body
  );
}

export default ProjectDetailModal;
