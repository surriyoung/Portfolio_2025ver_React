function SkillsContent({ items }) {
  return (
    <ul className="skills-cont">
      {items.map((item, index) => (
        <li key={index} data-aos="fade-up" data-aos-delay={index * 500}>
          <div>
            <img src={item.image} alt={item.title} />
          </div>
          <h5>{item.title}</h5>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default SkillsContent;
