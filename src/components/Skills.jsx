const skills = [
  'Java', 'Spring Boot', 'Node.js', 'React', 'PostgreSQL', 'MySQL',
  'HTML', 'CSS', 'JavaScript', 'Express.js', 'Git', 'Postman',
  'JWT', 'DTO Mapping', 'Docker', 'Maven',
];

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map(skill => (
          <span key={skill} className="skill-item">{skill}</span>
        ))}
      </div>
    </section>
  );
}
