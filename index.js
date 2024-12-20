const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/clientes', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB conectado"))
.catch((err) => console.error("Erro ao conectar com o MongoDB "+err))

const cors = require('cors')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use('/', require('./routes/index.route'))

const port = 3000 | process.env.PORT

app.listen(port)