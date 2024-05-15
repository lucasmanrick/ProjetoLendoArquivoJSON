const Pessoa = require('../model/Pessoa');


const controllers = {
  RegistrarClientes(req,res) {
    const dataSend = req.body;
    console.log(dataSend)
    let receiveInstanciedItens = []
    dataSend.dados.forEach((el,index) => {
      const instanciaPessoa = new Pessoa(el.nome,el.data_nasc,el.cpf,el.sexo,el.estado_civil,el.email,el.telefone)
      receiveInstanciedItens.push(instanciaPessoa)
      console.log('instanciado cliente', receiveInstanciedItens)
      console.log(instanciaPessoa)
      dataSend.dados.forEach((e,ind) => {
        if(ind === index) {
          return
        }
        if(e.cpf === el.cpf) {
          receiveInstanciedItens.pop()
        }
      })
      
    })
    // console.log('chegou', receiveInstanciedItens)
    let takeInserts = 0
    receiveInstanciedItens.forEach((el) => {
      try {
        let registro =  el.registrarPessoa()
        takeInserts = el
        res.json(registro)
      }catch (e) {
       console.log(e)
       res.json(e)
      }
      
    })

  }
}

module.exports = controllers