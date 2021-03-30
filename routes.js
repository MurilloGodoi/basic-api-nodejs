const { Router } = require('express');
const AtendimentosController = require('./controllers/AtendimentosController');
const AtendimentoController = require('./controllers/AtendimentosController');

const routes = Router();

routes.get('/atendimentos', AtendimentoController.index);
routes.get('/atendimentos/:id', AtendimentosController.findOne)
routes.post('/atendimentos', AtendimentoController.store);
routes.patch('/atendimentos/update/:id', AtendimentoController.updateOne);
routes.delete('/atendimentos/delete/:id', AtendimentoController.deleteById);

module.exports = routes;
  