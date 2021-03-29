const express = require("express");
const routes = require("./routes");
const connection = require("./Models/connection");
const Tabelas = require("./Models/tabelas");
connection.connect((erro) => {
  if (erro) {
    console.log(erro);
  } else {
    Tabelas.init(connection);

    const app = express();
    app.use(express.urlencoded({ extended: true}))
    app.use(express.json());
    app.use(routes);
    app.listen(3333);
  }
});
