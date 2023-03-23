const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "simplecrud",
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados: " + err.stack);
    return;
  }
  console.log("Conexão com o banco de dados estabelecida com sucesso.");
});

app.get("/", (request, result) => {
  let showItems = "SELECT * FROM crud";
  let INSERT =
    "INSERT INTO crud ( id, name, price, category ) VALUES ( '4', 'Ideapad', 'R$2500.00', 'Notebook' )";

  db.query(showItems, (error, results) => {
    if (error) throw error;
    console.log("Os resultados da consulta são: ", results);
    result.send(results);
    return;
  });
});

app.listen(3001, () => {
  console.log("Funcionando");
});
