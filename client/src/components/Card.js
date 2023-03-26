import React from "react";

import styles from "./Card.css";

const Card = (props) => {
  return (
    <div className="cardContainer">
      <h2>{props.name}</h2>
      <p>{props.address}</p>
      <p>{props.price}</p>
      <p>{props.contact}</p>
    </div>
  );
};

export default Card;
