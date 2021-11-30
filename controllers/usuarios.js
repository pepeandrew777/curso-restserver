
const {response,request }= require('express');
const usuariosGet = (req=request, res = response)  => {
      const {q,nombre='Sin nombre',apikey,page,limit} = req.query;
             res.json({
              msg:'get API - controlador',
              q,
              nombre,
              apikey,
              page,
              limit
             });
}

const usuariosPost = (req, res = response) => {

    const {nombre,edad} = req.body;

    res.status(201).json({
      msg:'post API',
      nombre,
      edad
    });
}
const usuariosPut = (req, res) => {

    const { id } = req.params;
    res.json({
      msg:'put API',
      id
    });
  }

const usuariosDelete = (req, res = response) => {
    res.json({
      msg:'delete API'
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({
      msg:'patch API'
    })
}
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosDelete,
    usuariosPatch,
    usuariosPut 
}