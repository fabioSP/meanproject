const express = require('express')
const router = express.Router()
const Cliente = require('../models/index.model')

router.get('/', (req, res) => {
  Cliente.find({}, (err, clients) => {
    res.json(clients)
  })
})

router.post('/', (req, res) => {
  const client = new Cliente({
    name: req.body.name,
    email: req.body.email,
    tel: req.body.tel,
    cpf: req.body.cpf
  })
  client.save(() => {
    res.json(client)
  })
})

router.put('/:id', async (req, res) => {
  client = await Cliente.findById(req.params.id)
  client.name = req.body.name
  client.email = req.body.email
  client.tel = req.body.tel
  client.cpf = req.body.cpf
  
  client.save(() => {
    res.json(client)
  })
})

router.delete('/:id', (req, res) => {
  Cliente.findByIdAndDelete(req.params.id, (err) => {
    res.json({'message': 'deleted'})
  })
})

module.exports = router