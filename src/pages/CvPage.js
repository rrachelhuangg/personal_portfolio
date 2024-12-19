import React from "react";
import "../index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

function CvPage(){
    const firstBlock = `i am currently a second-year student at w&m`;
    const secondBlock = `i also work for black cape, inc and oslc!`;
    const thirdBlock = `my completed cources and technical skills:`;
    const speed = 0.175;

    const card1Data = [
        {left:"William & Mary", right:"Williamsburg, VA", size: "large",tag:""},
        {left:"B.S. in Computer Science, B.S. in Applied Mathematics", right:"2023-2026", size:"small", tag:""},
        {left:"Undergraduate Machine Learning Research with Professor Peers", right:"2024-", size:"medium", tag:""},
        {left:"Google Student Developer Club Core Team Web Developer", right:"2023-", size:"medium", tag:""},
        {left:"Monroe Scholar Quantum Optimization Research with Professor Li", right:"2024-", size:"medium", tag: ""}
    ];

    const card2Data = [
        {left:"Black Cape, Inc.", right:"Arlington, VA", size: "large", tag:""},
        {left:"Software Engineering Intern", right:"2024-", size:"small", tag:""},
        {left:"Researched and implemented backend features for LLM apps and data pipelines", right:"", size:"medium", tag: ""},
    ];

    const card3Data = [
        {left:"OSLC", right:"Williamsburg, VA", size: "large", tag:""},
        {left:"Musician", right:"2024-", size:"small", tag:""},
        {left:"Select and perform music with piano and pipe organ.", right:"", size:"medium", tag: ""},
    ];

    const card4Data = [
        {left:"Completed Courses", right:"", size: "large", tag:""},
//        Software
// Development, Computer Organization, Intermediate Linear Algebra, Data Structures, Discrete Structures, Foundations of Math
        {left:"Principles of Programming Languages, Algorithms, Ordinary Differential Equations", right:"", size:"medium", tag: ""},
        {left:"Technical Skills", right:"", size: "large", tag:""},
        {left:"[insert text here]", right:"", size:"medium", tag: ""},
    ];

    return(
        <div style = {{display:'flex',flexDirection:'column', marginTop:'12.5%', textAlign:'center'}}>
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
                <div className = "main-text" style = {{marginTop:'13%'}}>
                    {secondBlock.split('').map((char, index)=>(
                    <span key={index} className="letter2" style={{animationDelay:`${(index+firstBlock.length)*speed}s`}}>
                        {char===' ' ? '\u00A0' : char}
                        <span className="cursor" style = {{animationDelay:`${(index+firstBlock.length)*speed}s`}}>|</span>
                    </span>
                    ))}
                </div>
                <Card data = {card2Data}/>
                <Card data = {card3Data}/>
                <div className = "main-text" style = {{marginTop:'6.75%'}}>
                    {thirdBlock.split('').map((char, index)=>(
                    <span key={index} className="letter3" style={{animationDelay:`${(index+firstBlock.length+secondBlock.length)*speed}s`}}>
                        {char===' ' ? '\u00A0' : char}
                        <span className="cursor" style = {{animationDelay:`${(index+firstBlock.length+secondBlock.length)*speed}s`}}>|</span>
                    </span>
                    ))}
                </div>
                <Card data = {card4Data}/>
            </div>
            <Footer/>
        </div>
    );
}

export default CvPage;