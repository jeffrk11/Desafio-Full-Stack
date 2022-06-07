const express = require('express');
const { json } = require('express/lib/response');
const router = express.Router();
// const service = require('../service/pedidosService')

router.get('/products',(req,res,next) =>{
    // const pedidos = service.findAll()
    res.status(200).send("ola")
})

module.exports = router