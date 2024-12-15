import React from "react";
import {Link} from "react-router-dom";
import "../index.css";
import emailIcon from "../assets/images/email_icon.png"; 
import codeIcon from "../assets/images/code_icon.png";
import linkedinIcon from "../assets/images/linkedin_icon.png";

function Footer(){
    return(
        <div className="footer-component">
            <Link to="/" className="link link1">
                <img src={emailIcon}/>
                contact
            </Link>
            <Link to="https://github.com/rrachelhuangg" className="link link2">
                <img src={codeIcon} className = "img2"/>
                github
            </Link>
            <Link to="https://www.linkedin.com/in/rachel-huang-b26211216/" className="link">
                <img src={linkedinIcon}/>
                linkedin
            </Link>
        </div>
    );
}

export default Footer;