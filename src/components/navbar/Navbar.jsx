import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = ({flag, filterProjects}) => {
    const [query, setQuery] = useState("");
    return (
        <nav>
            <div className="logo"><Link to='/'>EliteProjects</Link></div>
            <div className="search" style={{display: `${(flag==0)?"block":"none"}`}}><input type="text" onChange={(e)=>{setQuery(e.target.value)}} className="searchBox" name='searchText' placeholder='Search' />
            <button className='btn' onClick={()=>{filterProjects(query); document.querySelector('.loader').style.display="flex"}}>Search</button></div>
        </nav>
    );
}

export default Navbar;
