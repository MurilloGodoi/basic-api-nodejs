const AtendimentoModel = require("../Models/Atendimentos");

class AtendimentoController {
  index(req, res) {
    AtendimentoModel.listarAtendimentos(res);
  }

  store(req, res) {
    const dadosNovoAtendimento = req.body;
    AtendimentoModel.adicionaAtendimento(res,dadosNovoAtendimento);
  }

  findOne(req, res) {
    const { id } = req.params;
    AtendimentoModel.listarAtendimentoPorId(res, id);
  }

  updateOne(req, res) {
    const { id } = req.params;
    const novosDadosAtendimento = req.body;
    AtendimentoModel.atualizarAtendimentoPorId(res, id, novosDadosAtendimento);
  }

  deleteById(req, res) {
    const { id } = req.params;
    AtendimentoModel.excluirAtendimentoPorId(res, id);
  }
}

module.exports = new AtendimentoController();
