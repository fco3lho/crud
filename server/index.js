const express = require("express");
const app = express();
const mysql = require("mysql");

const database = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "",
});

app.get("/", (request, result) => {
  result.send("Hello world");
  //let SQL = "";
});

app.listen(3001, () => {
  console.log("Funcionando");
});
