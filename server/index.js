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

app.use(cors());
app.use(express.json());

//Testa conexão com o banco de dados
db.connect((err) => {
  if (err) {
    console.error("Error to database connect.", err.stack);
    return;
  }
  console.log("Database connection successfully established!");
});

//Posta novo objeto no banco de dados (CREATE)
app.post("/register", (req, res) => {
  const { name } = req.body;
  const { address } = req.body;
  const { price } = req.body;
  const { contact } = req.body;

  let SQL =
    "INSERT INTO game ( name, address, price, contact ) VALUES ( ?, ?, ?, ? )";

  db.query(SQL, [name, address, price, contact], (error, results) => {
    console.log(error);
  });
});

//Mostra todos os itens da tabela do banco de dados (READ)
app.get("/getCards", (req, res) => {
  let SQL = "SELECT * FROM game";

  db.query(SQL, (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

//Atualiza um item (linha) da tabela no banco de dados (UPDATE)
app.put("/edit", (req, res) => {
  const { id } = req.body;
  const { name } = req.body;
  const { address } = req.body;
  const { price } = req.body;
  const { contact } = req.body;

  let SQL =
    "UPDATE game SET name = ?, address = ?, price = ?, contact = ? WHERE id = ?";

  db.query(SQL, [name, address, price, contact, id], (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

//Deleta um item (linha) da tabela no banco de dados (DELETE)
app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  let mysql = "DELETE FROM game WHERE id = ?";
  db.query(mysql, id, (error, results) => {
    if (error) {
      console.log(error);
    } else {
      res.send(results);
    }
  });
});

app.listen(3001, () => {
  console.log("Working...");
});
