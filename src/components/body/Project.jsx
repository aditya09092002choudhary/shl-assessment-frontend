import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({project}) => {
    return (
        <div className="project-card">
            <Link to= {`/projects/${project._id}`}>
            <div className='project-card-inset'>
                <span>Title</span>
                <h2 className="project-title">{project.projectTitle}</h2>
                    <div className="project-details">
                    <div>
                            <span>Project Technologies:</span> <strong>{(project.projectTech != null) ? project.projectTech : '-'}</strong>
                        </div>
                        <div>
                            <span>Frontend Technical Skills:</span> <strong>{(project.frontendTechSkills != null) ? project.frontendTechSkills : '-'}</strong>
                        </div>
                        <div>
                            <span>Backend Technical Skills:</span> <strong>{(project.backendTechSkills != null) ? project.backendTechSkills : '-'}</strong>
                        </div>
                        <div>
                            <span>Database Technical Skills:</span> <strong>{(project.databaseTechSkills != null) ? project.databaseTechSkills : '-'}</strong>
                        </div>
                        <div>
                            <span>Infrastructure Technical Skills:</span> <strong>{(project.infraTechSkills != null) ? project.infraTechSkills : '-'}</strong>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Project;
