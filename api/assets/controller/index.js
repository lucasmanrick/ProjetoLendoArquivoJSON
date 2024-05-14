const Pessoa = require('../model/Pessoa');


const controllers = {
  RegistrarClientes(req,res) {
    const dataSend = req.body;
    let receiveInstanciedItens = []
    dataSend.dados.forEach((el) => {
      const instanciaPessoa = new Pessoa(el.nome,el.data_nasc,el.cpf,el.sexo,el.estado_civil,el.email,el.telefone)
      receiveInstanciedItens.push(instanciaPessoa)
    })

    let takeInserts = 0
    receiveInstanciedItens.forEach((el) => {
      try {
        console.log(el)
        el.registrarPessoa()
        takeInserts = el
      }catch (e) {
       console.log(e)
      }
      
    })

    return res.json(receiveInstanciedItens)
  }
}

module.exports = controllers