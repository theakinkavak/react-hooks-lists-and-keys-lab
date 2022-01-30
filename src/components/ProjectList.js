import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* render ProjectItem components here */}
        {projects.map(projectItem => {
          return (
            <ProjectItem 
              key={projectItem.id} 
              name={projectItem.name} 
              about={projectItem.about} 
              technologies={projectItem.technologies} 
            />
          )
        })}
      </div>
    </div>
  );
}

export default ProjectList;
