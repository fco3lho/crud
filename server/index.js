const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "simplecrud",
});

//Testa conexão com o banco de dados
db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados: " + err.stack);
    return;
  }
  console.log("Conexão com o banco de dados estabelecida com sucesso.");
});

app.use(cors());
app.use(express.json());

//Posta novo objeto no banco de dados
app.post("/register", (request, result) => {
  const { name } = request.body;
  const { price } = request.body;
  const { category } = request.body;

  let SQL =
    "INSERT INTO crud ( name, price, category ) VALUES ( ?, ?, ? )";

  db.query(SQL, [name, price, category], (error, result) => {
    console.log(error);
  });
});

//Mostra todos os itens da tabela do banco de dados
app.get("/getCards", (request, result) => {
  let SQL = "SELECT * FROM crud";

  db.query(SQL, (error, results) => {
    if (error) throw error;
    console.log("Os resultados da consulta são: ", results);
    result.send(results);
  });
});

app.listen(3001, () => {
  console.log("Funcionando");
});
