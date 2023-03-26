import React from "react";

//CSS
import styles from "./Card.css";

const Card = (props) => {
  return (
    <div className="cardContainer">
      <h2>{props.name}</h2>
      <p>{props.address}</p>
      <p>{props.price}</p>
      <p>{props.contact}</p>
      <div className="actions">
        <i className="bi bi-pencil"></i>
        <i className="bi bi-trash"></i>
      </div>
    </div>
  );
};

export default Card;
