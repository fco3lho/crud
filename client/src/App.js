import React, { useState, useEffect } from "react";
import "./App.css";

//Leva os dados para o backend
import Axios from "axios";

//Components
import Card from "./components/Card";

function App() {
  const [values, setValues] = useState();
  const [items, setItems] = useState();

  // Salva os dados alterados no formulário.
  const handleChangeValues = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Envia os dados do formulário ao clicar no botão.
  const handleSubmit = (e) => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      address: values.address,
      price: values.price,
      contact: values.contact,
    }).then((response) => {
      console.log(response);
    });
  };

  //Puxa os dados contidos no endereço especificado
  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <div className="app-container">
      <form className="register-container" onSubmit={handleSubmit}>
        <h1>Registrar pelada</h1>
        <input
          type="text"
          name="name"
          placeholder="Nome da quadra"
          className="register-input"
          onChange={handleChangeValues}
        />
        <input
          type="text"
          name="address"
          placeholder="Endereço"
          className="register-input"
          onChange={handleChangeValues}
        />
        <input
          type="text"
          name="price"
          placeholder="Preço da hora"
          className="register-input"
          onChange={handleChangeValues}
        />
        <input
          type="text"
          name="contact"
          placeholder="Contato"
          className="register-input"
          onChange={handleChangeValues}
        />

        <button className="register-button">Cadastrar</button>
      </form>

      {/* Mostra todos os itens da tabela do banco de dados */}
      {typeof items !== "undefined" &&
        items.map((value) => {
          return (
            <Card
              key={value.id}
              listCard={items}
              setListCard={setItems}
              id={value.id}
              name={value.name}
              address={value.address}
              price={value.price}
              contact={value.contact}
            ></Card>
          );
        })}
    </div>
  );
}

export default App;
