class Tabelas {
  init(conexao) {
    this.conexao = conexao;
    this.criarAtendimentos();
  }

  criarAtendimentos() {
    const sql =
      "CREATE TABLE IF NOT EXISTS Atendimentos(id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, `data` datetime not null DEFAULT '1970-01-01 00:00:00', `dataCriacao` datetime not null DEFAULT '1970-01-01 00:00:00', status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))";

    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela atendimento criada com sucesso");
      }
    });
  }
}

module.exports = new Tabelas();
