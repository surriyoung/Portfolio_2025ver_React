function ProfileContent({ items }) {
  return (
    <ul className="profile-cont">
      {items.map((item, index) => (
        <li key={index}>
          <div className="date">
            <span>&#123; &#125;</span>
            <span>{item.date}</span>
          </div>
          <div className="cont">
            <p>{item.title}</p>
            <p className="desc">{item.description}</p>
            {item.leaveReason && (
              <p className="profile-leave-reason">
                <span className="label">이직사유</span>
                <span className="text">{item.leaveReason}</span>
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ProfileContent;
