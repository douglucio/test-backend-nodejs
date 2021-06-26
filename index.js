// Importação de modulos
require('dotenv').config()
const express = require('express') //importar express
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const productRouter = require('./routes/productRouter')
const categoryRouter = require('./routes/categoryRouter')


const app = express()              //inicializar express

// Configurações
const port = process.env.PORT                 //porta que será escutada pelo app


//Conectar ao Banco de dados
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_CONFIG, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Mongo conectado...")
}).catch((err) => {
    console.log("Houve um erro na conexão com o Mongo: "+err)
})

// Body Parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


/* Rotas */
// Rotas de usuários
app.use('/categories', categoryRouter)
app.use('/products', productRouter)



// Ultima linha, executar app
app.listen(port, function() {
    console.log("Servidor rodando em http://localhost:"+port)
})