import React from "react";
import {Link} from "react-router-dom";
import "../index.css";
import worldIcon from "../assets/images/world_icon.png"; 
import cvIcon from "../assets/images/cv_icon.png";
import projectIcon from "../assets/images/projects_icon.png";

function Header(){
    return(
        <div className="header-component">
            <Link to="/" className="link link1">
                <img src={worldIcon}/>
                about
            </Link>
            <Link to="/cv" className="link">
                <img src={cvIcon} className = "img2"/>
                cv
            </Link>
            <Link to="/" className="link">
                <img src={projectIcon}/>
                projects
            </Link>
        </div>
    );
}

export default Header;