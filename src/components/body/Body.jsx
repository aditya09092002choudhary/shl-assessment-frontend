import React from 'react';
import './body.css';
import Projects from './Projects';
import Navbar from '../navbar/Navbar';
import loader from './loader.gif';
const Body = ({projects, filterProjects}) => {
    return (
        <>
            <Navbar filterProjects={filterProjects} flag={0}/>
            <div className="loader" style={{display:"none",justifyContent:"center",alignItems:"center"}}>
                <img src={loader} style={{width:"40px"}} alt="loader" />
            </div>
            <div className='body-container'>
                <Projects projects = {projects} />
            </div>
        </>
    );
}

export default Body;
