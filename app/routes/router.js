// app/routes/router.js

var express = require("express");
var router = express.Router();

// Rota para a página inicial
// URL: http://seusite.com/
router.get("/", function (req, res) {
    res.render("pages/index", { titulo: "Início" });
});

// Rota para a página 'Home' (anteriormente 'sobre-api')
// URL: http://seusite.com/home
router.get("/home", function (req, res) {
    res.render("pages/home", { titulo: "Home" });
});

// Rota para a página 'Saiba Mais' (anteriormente 'banco-de-dados')
// URL: http://seusite.com/saiba-mais
router.get("/saiba-mais", function (req, res) {
    res.render("pages/saiba-mais", { titulo: "Saiba Mais" });
});

module.exports = router;