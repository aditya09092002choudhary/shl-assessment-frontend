import React,{ useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/footer/Footer';
import Body from './components/body/Body';
import ProjectBody from './components/body/ProjectBody';
import axios from 'axios';

function App() {
  const [projects, setProjects] = useState([]);
  const url = "https://shl-assessment-backend.onrender.com/api/projects/";
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(url)
        .then(response => response.json())
        .then(data => {
          setProjects(data)
          const comp = (a,b)=>{
            let n1 = Number.parseInt(a.projectTitle.split(' ')[1]);
            let n2 = Number.parseInt(b.projectTitle.split(' ')[1]);
            return n1 - n2;
        }
        
        setProjects(prev =>{
          let data = [...prev];
          data.sort(comp);
          return data;
        });
    });
   }, []);

  function filterProjects(query){
    console.log(query);
    const url = "https://shl-assessment-backend.onrender.com/filter";
    axios.post(url,{"query":query},{headers:{"Content-Type" : "application/json"}}).then((res)=>{
      if(Array.isArray(res.data)){
        console.log(res.data);
        setProjects(res.data);
        document.querySelector('.loader').style.display = "none";
      }
      
  });
    
  }

  return (
    <React.StrictMode>
      <Router>
        <Routes>
            <Route path='/' exact element={<Body filterProjects={filterProjects} projects={projects} />} />
            <Route path='/projects/:id' element={<ProjectBody />} />
        </Routes>
          <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default App;