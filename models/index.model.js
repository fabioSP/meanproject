const mongoose = require('mongoose')
const Schema = mongoose.Schema

newSchema = new Schema({
  name:String,
  email:String,
  tel: String,
  cpf:Number
})

module.exports = mongoose.model('Cliente', newSchema)