const connection = require('../config/db')

class Pessoa {
  constructor(nome,dataNasc,cpf,sexo,estadoCivil,email,telefone) {
    this.nome = nome;
    this.dataNasc = dataNasc
    this.cpf = cpf
    this.sexo = sexo
    this.estadoCivil = estadoCivil
    this.email = email
    this.telefone = telefone
  }

 async registrarPessoa() {
    try {
      const conn = await connection ();
      const [rows] = await conn.query(`Insert into pessoa (nome,data_nasc,cpf,sexo,estado_civil,email,telefone) VALUES (?,?,?,?,?,?,?)`, [this.nome,this.dataNasc,this.cpf,,this.sexo,this.estadoCivil,this.email,this.telefone]);
      return rows
    }
    catch (error) {
      console.log(error)
    }
  }

}

module.exports = Pessoa