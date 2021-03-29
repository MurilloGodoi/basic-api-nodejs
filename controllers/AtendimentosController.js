const AtendimentoModel = require("../Models/Atendimentos");

class AtendimentoController {
  index(req, res) {
    return res
      .send({
        name: "Murillo Godoi",
        curso: "Engenharia de Software",
        idade: "17",
      })
      .status(200);
  }

  store(req, res) {
    const dadosNovoAtendimento = req.body;
    AtendimentoModel.adicionaAtendimento(dadosNovoAtendimento);
    return res
      .send({
        message: "Sucess",
      })
      .status(200);
  }
}

module.exports = new AtendimentoController();
