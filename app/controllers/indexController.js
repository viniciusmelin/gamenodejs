module.exports.index = (application,req,res)=>{
    res.render('index',{validacao:{},dados:{}});
}
module.exports.autenticar = (application,req,res)=>{
    var dadosForm = req.body

    req.assert('usuario','Usuário não pode ser vazio').notEmpty()
    req.assert('senha','Senha não poder ser vazio').notEmpty()

    var erros = req.validationErrors()
    if(erros)
    {
        res.render('index',{validacao:erros,dados:dadosForm})
        return
    }

    var connection = application.config.dbConnection
    var UsuariosDAO = new application.app.models.UsuariosDAO(connection)
    UsuariosDAO.autenticar(dadosForm,req,res)
}