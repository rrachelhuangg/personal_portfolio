import React from "react";
import "../index.css";
import atomIcon from "../assets/images/atom_icon.png";

function Card({data}){
    return (
        <div className="card-component">
            {data.map((item, index)=>(
                <div key={index} className={`card-content card-${item.size}-content ${item.tag}`}>
                    {item.tag==="link-tag" || item.tag==='link-tag-big' ? (
                        <a href = {item.link} target="_blank" className="link-tag">
                            {item.left}
                        </a>
                    ):(item.left)
                    }
                    <span className="card-right-content">
                        {item.right}
                        {item.image && <img src = {item.image} className={`card-icon ${item.image===atomIcon ? 'atom-icon':''}`}/>}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default Card;