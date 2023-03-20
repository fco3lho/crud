import React, { useState } from "react";

import "./App.css";

function App() {
  const [values, setValues] = useState();

  // Salva os dados alterados no formulário.
  const handleChangeValues = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Envia os dados do formulário ao clicar no botão.
  const handleSubmit = (e) => {
    console.log(values);
  };

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
    </div>
  );
}

export default App;
