const { Router } = require('express');
const AtendimentoController = require('./controllers/AtendimentosController');

const routes = Router();

routes.get('/', AtendimentoController.index);
routes.post('/atendimentos', AtendimentoController.store);

module.exports = routes;
  