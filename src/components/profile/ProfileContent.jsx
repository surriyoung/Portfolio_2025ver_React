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
            <p>{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ProfileContent;
