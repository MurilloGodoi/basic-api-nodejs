const connection = require("./connection");

class Atendimento {
  adicionaAtendimento(atendimento) {
    const sql = "INSERT INTO Atendimentos SET ?";

    connection.query(sql, atendimento, (erro) => {
      if (erro) {
        console.log(erro);
      }
    });
  }
}

module.exports = new Atendimento();
