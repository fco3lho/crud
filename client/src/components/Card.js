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

  //Atualiza um item (linha) da tabela no banco de dados (UPDATE)
  const handleEditGame = () => {
    Axios.put("http://localhost:3001/edit", {
      id: editValues.id,
      name: editValues.name,
      address: editValues.address,
      price: editValues.price,
      contact: editValues.contact,
    }).then(() => {
      props.setListCard(
        props.listCard.map((value) => {
          return value.id === editValues.id
            ? {
                id: editValues.id,
                name: editValues.name,
                address: editValues.address,
                price: editValues.price,
                contact: editValues.contact,
              }
            : value;
        })
      );
    });
  };

  const handleChangeValues = (e) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
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

      {/* Formulário de edição */}
      <form onSubmit={handleEditGame}>
        <h1>Editando {props.name}</h1>
        <input
          type="text"
          id="id"
          label="ID"
          defaultValue={props.id}
          disabled
        />
        <input
          type="text"
          id="name"
          label="Nome da pelada"
          defaultValue={props.name}
          onChange={handleChangeValues}
          name="name"
          className="register-input"
        />
        <input
          type="text"
          id="address"
          label="Endereço"
          defaultValue={props.address}
          onChange={handleChangeValues}
          name="address"
          className="register-input"
        />
        <input
          type="text"
          id="price"
          label="Preço"
          defaultValue={props.price}
          onChange={handleChangeValues}
          name="price"
          className="register-input"
        />
        <input
          type="text"
          id="contact"
          label="Contato"
          defaultValue={props.contact}
          onChange={handleChangeValues}
          name="contact"
          className="register-input"
        />
        <button>Editar</button>
      </form>
    </>
  );
};

export default Card;
