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
      price: values.cost,
      category: values.category,
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
      <div className="register-container">
        <h1>Lojinha do Felp</h1>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          className="register-input"
          onChange={handleChangeValues}
        />
        <input
          type="text"
          name="cost"
          placeholder="Preço"
          className="register-input"
          onChange={handleChangeValues}
        />
        <input
          type="text"
          name="category"
          placeholder="Categoria"
          className="register-input"
          onChange={handleChangeValues}
        />

        <button className="register-button" onClick={() => handleSubmit()}>
          Cadastrar
        </button>
      </div>

      {/* Mostra todos os itens da tabela do banco de dados */}
      {typeof items !== "undefined" &&
        items.map((value) => {
          return <Card></Card>;
        })}
    </div>
  );
}

export default App;
