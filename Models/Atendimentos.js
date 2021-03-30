const moment = require('moment');
const connection = require("./connection");

class Atendimento {
  adicionaAtendimento(dadosNovoAtendimento) {
    const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
    const data = moment(dadosNovoAtendimento.data).format('YYYY-MM-DD HH:MM:SS');
    const novoAtendimento = {...dadosNovoAtendimento, data, dataCriacao};

    const sql = "INSERT INTO Atendimentos SET ?";

    connection.query(sql, novoAtendimento, (erro) => {
      if (erro) {
        console.log(erro);
      }
    });
  }
}

module.exports = new Atendimento();
