// Referenciando os modulos
const express = require("express")
const router = express.Router()
const mongoose = require('mongoose')
require("../models/Product")  //importando model Product para rota
const Product = mongoose.model('products')


//Rota para listar produtos
router.get('/list', (req, res) => {
    Product.find().then((products) => {
        res.json(products)
        
    }).catch((err) => {
        res.status(500).json({message: '"Houve um erro ao buscar os produtos"'});
        
    })
})

// Rota para adicionar produtos no banco de dados
router.post('/add', (req, res) => {
    var errors = []

    if(!req.body.title || req.body.title == undefined || req.body.title == null){
        errors.push({text: "Title inválido"})
    }

    if(!req.body.description || req.body.description == undefined || req.body.description == null){
        errors.push({text: "Descrição inválido"})
    }

    if(!req.body.price || req.body.price == undefined || req.body.price == null){
        errors.push({text: "Preço inválido"})
    }

    
    if (errors.length > 0) {
        res.status(500).json({errors: errors})
    } else {

            const newCategory = {
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                category: req.body.category,
            }
     
            new Product(newCategory).save().then(() => {
                res.json({menssagem: "Produto cadastrado com sucesso"})
                
            }).catch((err) => {
                res.status(500).json({message: '"Houve um erro ao cadastrar o produto"'});
                
            })
    }

})


// Rota para alterar produto
router.put('/edit/:id', (req, res) => {
    Product.findOne({_id: req.params.id}).then((product) => {
        let title = product.title
        let description = product.description
        let price = product.price
        let category = product.category
        
        if(req.body.title){
            title = req.body.title
        }

        if(req.body.description){
            description = req.body.description
        }

        if(req.body.price){
            price = req.body.price
        }

        if(req.body.category){
            category = req.body.category
        }
    
        product.title = title
        product.description = description
        product.price = price
        product.category = category
    
        product.save().then(() => {
            res.json({menssagem: 'Produto alterado com sucesso'})
        }).catch((err) => {
            res.json({menssagem: 'Erro ao alterar o Produto'})
      
        })
    }).catch((err) => {
        res.json({menssagem: 'produto não encontrada'})
        
    })
 
    
})

// Rota para adicionar uma categoria ao produto
router.post('/alter/:prod/:cat', (req, res) => {
    Product.findOne({_id: req.params.prod}).then((product) => {
        let category = product.category
        
        category.push(req.params.cat)
    
        product.save().then(() => {
            res.json({menssagem: 'Produto alterado com sucesso'})
        }).catch((err) => {
            res.json({menssagem: 'Erro ao alterar o Produto'})
      
        })
    }).catch((err) => {
        res.json({menssagem: 'produto não encontrada'})
        
    })
 
    
})

// Rota para remover categoria do produto
router.post('/remove/:prod/:cat', (req, res) => {
    Product.findOne({_id: req.params.prod}).then((product) => {
        let category = product.category
        
        category.splice(category.indexOf(req.params.cat), 1);
    
        product.save().then(() => {
            res.json({menssagem: 'Produto alterado com sucesso'})
        }).catch((err) => {
            res.json({menssagem: 'Erro ao alterar o Produto'})
      
        })
    }).catch((err) => {
        res.json({menssagem: 'produto não encontrada'})
        
    })
 
    
})

// Rota para deletar produto
router.delete('/del/:id', (req, res) => {
    Product.remove({_id: req.params.id}).then(() => {
        res.json({menssagem: "Produto removido com sucesso"})
        
    }).catch((err) => {
        res.json({menssagem: "Houve um erro ao deletar o produto"})
    })
})

//Rota para buscar produto por ID
router.get('/search/:id', (req, res) => {
    Product.find({_id: req.params.id}).then((products) => {
        res.json(products)
        
    }).catch((err) => {
        res.status(500).json({message: '"Houve um erro ao buscar o produto"'});
        
    })
})

//Rota para buscar produto por categoria
router.get('/search/category/:id', (req, res) => {
    Product.find({category: req.params.id}).then((products) => {
        res.json(products)
        
    }).catch((err) => {
        res.status(500).json({message: '"Houve um erro ao buscar o produto"'});
        
    })
})

//Rota para buscar produto por title
router.get('/search/title/:title', (req, res) => {
    Product.find({title: req.params.title }).then((products) => {
        res.json(products)
        
    }).catch((err) => {
        res.status(500).json({message: '"Produto não encontrado"'});
        
    })
})

// Exportar rotas /user
module.exports = router