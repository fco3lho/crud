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
    console.error("Erro ao conectar ao banco de dados: " + err.stack);
    return;
  }
  console.log("Conexão com o banco de dados estabelecida com sucesso.");
});

//Posta novo objeto no banco de dados (CREATE)
app.post("/register", (request, result) => {
  const { name } = request.body;
  const { address } = request.body;
  const { price } = request.body;
  const { contact } = request.body;

  let SQL =
    "INSERT INTO game ( name, address, price, contact ) VALUES ( ?, ?, ?, ? )";

  db.query(SQL, [name, address, price, contact], (error, res) => {
    console.log(error);
  });
});

//Mostra todos os itens da tabela do banco de dados (READ)
app.get("/getCards", (request, result) => {
  let SQL = "SELECT * FROM game";

  db.query(SQL, (error, res) => {
    if (error) throw error;
    result.send(res);
  });
});

//Atualiza um item (linha) da tabela no banco de dados (UPDATE)
app.put("/edit", (request, result) => {
  const { id } = request.body;
  const { name } = request.body;
  const { address } = request.body;
  const { price } = request.body;
  const { contact } = request.body;

  let SQL =
    "UPDATE game SET name = ?,address = ?,price = ?,contact = ? WHERE id = ?";

  db.query(SQL, [name, address, price, contact, id], (error, res) => {
    if (error) throw error;
    result.send(res);
  });
});

//Deleta um item (linha) da tabela no banco de dados (DELETE)
app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  let mysql = "DELETE FROM game WHERE id = ?";
  db.query(mysql, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Funcionando");
});
