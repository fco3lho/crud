import React, { useState } from "react";
import Axios from "axios";

//CSS
import styles from "./Card.css";

const Card = (props) => {
  const [editValues, setEditValues] = useState({
    id: props.id,
    name: props.name,
    address: props.address,
    price: props.price,
    contact: props.contact,
  });

  //Deleta um item (linha) da tabela no banco de dados (DELETE)
  const handleDelete = () => {
    Axios.delete(`http://localhost:3001/delete/${editValues.id}`).then(() => {
      props.setListCard(
        props.listCard.filter((value) => {
          return value.id !== editValues.id;
        })
      );
    });
  };

  return (
    <div className="cardContainer">
      <h2>{props.id}</h2>
      <h2>{props.name}</h2>
      <p>{props.address}</p>
      <p>{props.price}</p>
      <p>{props.contact}</p>
      <div className="actions">
        <i className="bi bi-pencil"></i>
        <i className="bi bi-trash" onClick={() => handleDelete()}></i>
      </div>
    </div>
  );
};

export default Card;
