// app.js

var express = require("express");
var app = express();
var port = process.env.PORT || 3000;


app.use(express.static('public'));

// Configura o EJS como o motor de template
app.set("view engine", "ejs");

// Importa as rotas do arquivo 'router.js'
var rotas = require("./app/routes/router");

// Usa as rotas no aplicativo Express
// O caminho '/' indica que as rotas serão usadas a partir da raiz do seu site
app.use("/", rotas);



// Inicia o servidor na porta definida
app.listen(port, () => {
    console.log(`Servidor online\nhttp://localhost:${port}`);
});