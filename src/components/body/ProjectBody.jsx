import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

const ProjectBody = () => {
    const [project, setProject] = useState({})
    const {id} = useParams();
    useEffect(()=>{
        const url = `https://shl-assessment-backend.onrender.com/api/projects/${id}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setProject(data);
        });
    })
    return (
        <>
        <Navbar flag={1} />
        <div className='projectBody'>
            <div className="top">
                <h1>{project.projectTitle}</h1>
                <hr />
            </div>
            <span>⚙ Title</span>
            <h2 className="project-title">{project.projectTitle}</h2>
                <div className="project-details">
                <div>
                        <span>⚙ Project Technologies:</span> <strong>{(project.projectTech != null) ? project.projectTech : '-'}</strong>
                    </div>
                    <div>
                        <span>⚙ Frontend Technical Skills:</span> <strong>{(project.frontendTechSkills != null) ? project.frontendTechSkills : '-'}</strong>
                    </div>
                    <div>
                        <span>⚙ Backend Technical Skills:</span> <strong>{(project.backendTechSkills != null) ? project.backendTechSkills : '-'}</strong>
                    </div>
                    <div>
                        <span>⚙ Database Technical Skills:</span> <strong>{(project.databaseTechSkills != null) ? project.databaseTechSkills : '-'}</strong>
                    </div>
                    <div>
                        <span>⚙ Infrastructure Technical Skills:</span> <strong>{(project.infraTechSkills != null) ? project.infraTechSkills : '-'}</strong>
                    </div>
                </div>
        </div>
        </>
    );
}

export default ProjectBody;
