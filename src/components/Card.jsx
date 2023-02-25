import React from "react";

const Card = (props) => {
  return (
    <div className="Card">
      <img src={props.img} />
      <div className="card-button">
        <a href={props.link}>
          <button>{props.title}</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
