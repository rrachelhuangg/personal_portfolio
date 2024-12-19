import React from "react";
import "../index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import graphIcon from "../assets/images/graph_icon.png";
import atomIcon from "../assets/images/atom_icon.png";

function ProjectsPage(){
    const firstBlock = `i try to combine cs and math in my projects`;
    const secondBlock = `and dabble in quantum optimization research`;
    const thirdBlock = `here's what i've picked up over the years:`;
    const speed = 0.175;

    const card1Data = [
        {left:"Numerical Analysis Software Tool", right:"", size: "large",tag:"link-tag-big", link:"https://github.com/rrachelhuangg/numerical_methods", image:""},
        {left:"Command-line interface implementation of the Newton-Raphson Method and Simpson's Rule", right:"", size:"medium", tag:"", link:"", image:graphIcon}
    ];

    const card2Data = [
        {left:"Literature Review of the ZX-Calculus Method", right:"", size: "large", tag:"link-tag-big", link:"https://google.com", image:""},
        {left:"Presented at William & Mary Fall Undergraduate Research Symposium and W&M &Hacks Hackathon 2024.", right:"", size:"medium", tag: "",link:"", image:""},
        {left:"Selected as 1 of 2 students to present at 2024 Undergraduate Research Fair to represent the W&M Department of Computer Science.", right:"", size:"medium", tag: "more-lines", link:"", image:atomIcon}
    ];

    const card3Data = [
        {left:"Virginia Space Grant Consortium STEM Bridge Scholarship", right:"2024", size: "medium", tag:"", link:"", image:""},
        {left:"James Monroe Scholar Research Scholarship", right:"2023", size: "medium", tag:"", link:"", image:""},
        {left:"National Merit Scholarship Finalist", right:"2023", size: "medium", tag:"",link:"", image:""},
        {left:"Comparing Music with Dynamic Programming String-Matching Algorithms", right:"2022", size: "medium", tag:"link-tag", link:"https://journals.gmu.edu/index.php/jssr/article/view/3370", image:""},
        {left:"Comparisons of Classic and Quantum String Matching Algorithms", right:"2022", size: "medium", tag:"link-tag", link:"https://dl.acm.org/doi/pdf/10.1145/3573834.3574498", image:""}
    ];

    return(
        <div style = {{display:'flex',flexDirection:'column', marginTop:'8.6%', textAlign:'center'}}>
            <Header/>
            <div className = "content-wrapper" style={{paddingTop:'20%'}}>
                <div className = "main-text">
                    {firstBlock.split('').map((char, index)=>(
                        <span key={index} className="letter" style={{animationDelay:`${index*speed}s`}}>
                            {char===' ' ? '\u00A0' : char}
                            <span className="cursor" style = {{animationDelay:`${index*speed}s`}}>|</span>
                        </span>
                    ))}
                </div>
                <Card data = {card1Data}/>
                <div className = "main-text" style = {{marginTop:'3%'}}>
                    {secondBlock.split('').map((char, index)=>(
                    <span key={index} className="letter2" style={{animationDelay:`${(index+firstBlock.length)*speed}s`}}>
                        {char===' ' ? '\u00A0' : char}
                        <span className="cursor" style = {{animationDelay:`${(index+firstBlock.length)*speed}s`}}>|</span>
                    </span>
                    ))}
                </div>
                <Card data = {card2Data}/>
                <div className = "main-text" style = {{marginTop:'6.75%'}}>
                    {thirdBlock.split('').map((char, index)=>(
                    <span key={index} className="letter3" style={{animationDelay:`${(index+firstBlock.length+secondBlock.length)*speed}s`}}>
                        {char===' ' ? '\u00A0' : char}
                        <span className="cursor" style = {{animationDelay:`${(index+firstBlock.length+secondBlock.length)*speed}s`}}>|</span>
                    </span>
                    ))}
                </div>
                <Card data = {card3Data}/>
            </div>
            <Footer/>
        </div>
    );
}

export default ProjectsPage;