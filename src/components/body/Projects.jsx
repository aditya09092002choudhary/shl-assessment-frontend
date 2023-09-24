import React from 'react';
import Project from './Project';

const Projects = ({projects}) => {
    return (
        <div className="all-projects">
            {projects.map((project, ind)=>{
               return <Project project = {project} key={ind} />
            })}
        </div>
    );
}

export default Projects;
