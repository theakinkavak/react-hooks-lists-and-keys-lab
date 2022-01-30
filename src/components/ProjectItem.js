import React from "react";

function ProjectItem({ name, about, technologies }) {
  console.log(`Techonologies: ${technologies}`)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {technologies.map(technologiesItem => <span key={technologiesItem}>{technologiesItem}</span>)}
      </div>
    </div>
  );
}

export default ProjectItem;
