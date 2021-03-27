module.exports = (app) => {
  app.get('/atendimentos', (req, res) => res
    .json({
      nome: 'Belinhaaaa',
      raca: 'Basse',
    }).status(200),)}