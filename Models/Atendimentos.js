const moment = require("moment");
const connection = require("./connection");

class Atendimento {
  listarAtendimentos(res) {
    const sql = "SELECT * FROM Atendimentos";

    connection.query(sql, (erro, resultados) => {
      if (erro) res.status(400).json(erro);

      res.status(200).json(resultados);
    });
  }
  adicionaAtendimento(res, dadosNovoAtendimento) {
    const dataCriacao = moment().format("YYYY-MM-DD HH:MM:SS");
    const data = moment(dadosNovoAtendimento.data).format(
      "YYYY-MM-DD HH:MM:SS"
    );
    const novoAtendimento = { ...dadosNovoAtendimento, data, dataCriacao };

    const sql = "INSERT INTO Atendimentos SET ?";

    connection.query(sql, novoAtendimento, (erro) => {
      if (erro) {
        console.log(erro);
      }
    });

    res.status(201).json("Create Atendimento");
  }
  listarAtendimentoPorId(res, id) {
    const sql = `SELECT * FROM Atendimentos WHERE id=${id}`;

    connection.query(sql, (erro, resultados) => {
      const atendimentoEncontrado = resultados[0];

      if (erro) res.status(400).json(erro);

      res.status(200).json(atendimentoEncontrado);
    });
  }

  atualizarAtendimentoPorId(res, id, novosDadosAtendimento) {
    const sql = `UPDATE Atendimentos SET ? WHERE id=?`;

    connection.query(sql, [novosDadosAtendimento, id], (erro) => {

      if (erro) res.status(400).json(erro);

      res.status(204).json(" ");
    });
  }

  excluirAtendimentoPorId(res, id) {
    const sql = `DELETE FROM Atendimentos WHERE id=${id}`;

    connection.query(sql, (erro) => {

      if (erro) res.status(400).json(erro);

      res.status(200).json("User deleted");
    });
  }
}

module.exports = new Atendimento();
