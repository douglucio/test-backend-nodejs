// Referenciando os modulos
const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
require("../models/Category")  //importando model Category para rota
const Category = mongoose.model('categories')

//Rota para listar categorias
router.get('/list', (req, res) => {
    Category.find().then((categories) => {
        res.json(categories)
        
    }).catch((err) => {
        res.status(500).json({message: '"Houve um erro ao buscar as categorias"'});
        
    })
})

// Rota para adicionar categoria no banco de dados
router.post('/add', (req, res) => {
    var errors = []

    if(!req.body.name || req.body.name == undefined || req.body.name == null){
        errors.push({text: "Nome inválido"})
    }

    
    if (errors.length > 0) {
        res.status(500).json({errors: errors})
    } else {

            const newCategory = {
                name: req.body.name,
            }
     
            new Category(newCategory).save().then(() => {
                res.json({menssagem: "Categoria cadastrada com sucesso"})
                
            }).catch((err) => {
                res.status(500).json({message: '"Houve um erro ao cadastrar a categoria"'});
                
            })
    }

})

// Rota para deletar categoria
router.delete('/del/:id', (req, res) => {
    Category.remove({_id: req.params.id}).then(() => {
        res.json({menssagem: "Categoria removida com sucesso"})
        
    }).catch((err) => {
        res.json({menssagem: "Houve um erro ao deletar a categoria"})
    })
})

router.put('/edit/:id', (req, res) => {
    let name
    Category.findOne({_id: req.params.id}).then((category) => {
        name = category.name
        if(req.body.name){
            name = req.body.name
        }
    
        category.name = name
    
        category.save().then(() => {
            res.json({menssagem: 'Categoria alterada com sucesso'})
        }).catch((err) => {
            res.json({menssagem: 'Erro ao alterar a Categoria'})
      
        })
    }).catch((err) => {
        res.json({menssagem: 'categoria não encontrada'})
        
    })
 
    
})


// Exportar rotas /user
module.exports = router