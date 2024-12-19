import React from "react";
import "../index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function HomePage(){
    const firstBlock = `hello! i’m rachel huang, an aspiring software engineer studying computer science and applied mathematics at william & mary. i like tinkering around with different tech and seeing what i can build.`;
    const secondBlock = `feel free to click around!`;
    const speed = 0.175;
    
    return(
        <div style = {{display:'flex',flexDirection:'column', marginTop:'7%'}}>
            <Header/>
            <div className = "main-text">
                {firstBlock.split('').map((char, index)=>(
                    <span key={index} className="letter" style={{animationDelay:`${index*speed}s`}}>
                        {char===' ' ? '\u00A0' : char}
                        <span className="cursor" style = {{animationDelay:`${index*speed}s`}}>|</span>
                    </span>
                ))}
                <div style = {{marginTop:'5%'}}>
                    {secondBlock.split('').map((char, index)=>(
                    <span key={index} className="letter2" style={{animationDelay:`${(index+firstBlock.length)*speed}s`}}>
                        {char===' ' ? '\u00A0' : char}
                        <span className="cursor" style = {{animationDelay:`${(index+firstBlock.length)*speed}s`}}>|</span>
                    </span>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default HomePage;