import React from "react";

const Card = (props) => {
    return (
        <div className="Card">
            <img src={props.img} />
            <h3>{props.title}</h3>
            <a href={props.link} />
        </div>
    );
};

export default Card;