Para testar a aplicação será necessario:

1) Fazer um clone/fork do repositorio
2) Precisa ter nodejs instalado e depois instalar as dependencias dotenv, body-parser, express e mongoose 
3) Criar na raiz do projeto um arquivo .env com uma variavel PORT com sua porta de preferencia (ex: 8000) e MONGO_CONFIG com o caminho para mongodb de seu pc, (ex: "mongodb://localhost:27017/db_teste")
4) Acessar pasta do projeto e executar "node index.js" para rodar o servidor local
5) Usar software como Postman ou Insomnia para testar as rotas:
    a) http://localhost:8000/categories/add com método POST para adicionar categoria, use no body form url com campo name
    b) http://localhost:8000/products/add com método POST para adicionar produtos, use no bady form url com os campos title, description, price, category (em category usar ID da categoria)
    c) http://localhost:8000/products/list com método GET para listar todos os produtos
    d) http://localhost:8000/categories/list com método GET para listar todas as categorias
    e) http://localhost:8000/products/del/:id com método DELETE para excluir o produto, (em :id substituir pelo ID do produto para completar a url)
    f) http://localhost:8000/categories/del/:id com método DELETE para exluir a categoria (em :id substituir pelo ID da categoria para completar a url)
    g) http://localhost:8000/categories/edit/:id com método PUT para editar a categoria (em :id substituir pelo ID da categoria para completar a url)
    h) http://localhost:8000/products/edit/:id com método PUT para editar o cadastro do produto (em :id substituir pelo ID da categoria para completar a url)
    i) http://localhost:8000/products/alter/:prod/:cat com método POST para incluir uma categoria a um produto (em :prod substituir por Id do produto e em :cat substituir por ID da categoria que deseja adicionar)
    j) http://localhost:8000/products/remove/:prod/:cat com método POST para remover uma categoria do produto (em :prod substituir por Id do produto e em :cat substituir por ID da categoria que deseja adicionar)
    k) http://localhost:8000/products/search/title/:title com método GET para buscar pelo titulo do produto (em :title substituir pelo texto que deseja buscar)
    l) http://localhost:8000/products/search/:id com método GET para buscar pelo ID do produto
    m) http://localhost:8000/products/search/category/:id com método GET para buscar o produto pelo ID da categoria (em :id substituir pelo Id da categoria)
    




<h1>Backend Analyst Candidate Testing</h1>

Hello dear developer, in this test we will analyze your general knowledge and even speed of development. Below we will explain everything that will be needed.
Do not be alarmed, we do not expect everyone to be able to complete all tasks, this test is the same presented for candidates of all experience levels, so do what you can without worry.

<strong>The challenge</strong>

Your challenge is to develop an API, using Node.JS, for a product catalog management application. Thus, you must analyze and convert the user stories below into routes of an application.
 
<strong>User stories:</strong>

ok - As a user I would like to register a product so that I can have access to the data of this product in the future (Title, description, price, category) 
ok - I as a user would like to be able to associate and edit a product category;
ok - As a user I would like to be able to access the list of all products; ok
- As a user I would like to be able to filter products by name or category;
- I as a user would like to be able to update the product data;
- I as a user would like to be able to delete a product from my catalog;
 
<strong>Instructions</strong>
- <strong>To start the test, <strong>fork</strong> this repository, create a branch with its full name and then and send us the link to the test performed (link to your repository) . If you just clone the repository you will not be able to push and then it will be more complicated to make the pull request.</strong>
- The choice of libraries, databases, architecture, etc. is at your discretion.
- Change the README file explaining what it takes to run your application.
- Paste the branch name into the GUPY system and indicate the completion of the test
- If you want you can leave us feedback regarding the test

 
<strong>Our analysis</strong>
- Knowledge of Javascript, NodeJs, Express will be assessed for this position;
- We'll look at how you structure the:
  application layers;
  outgoing calls,
  environment variables,
   cache,
  unit tests,
  logs;
  error handling;
  documentation.
- Code organization, module separation, readability and comments.
- Commit history.
- The use of MongoDB is a differentiator
