import React from "react";
import "../index.css";

function Card({data}){
    return (
        <div className="card-component">
            {data.map((item, index)=>(
                <div key={index} className={`card-content card-${item.size}-content ${item.tag}`}>
                    {item.tag==="link-tag" ? (
                        <a href = {item.link} target="_blank" className="link-tag">
                            {item.left}
                        </a>
                    ):(item.left)
                    }
                    <span className="card-right-content">{item.right}</span>
                </div>
            ))}
        </div>
    );
}

export default Card;