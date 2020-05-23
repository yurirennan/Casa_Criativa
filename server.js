//utilizando express para configurar servidor
const express = require("express")
const server = express()

const db = require("./db")

server.use(express.static("public"))
server.use(express.urlencoded({ extended: true }))

//nunjucks config
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true, //noChace serve para não armazenar em memoria cache, evita problemas em relação a mudanças em CSS
})

//definindo rotas e capturando e retornando pedido pro cliente
server.get("/", function (request, response) {

    db.all(`SELECT * FROM ideias`, function (err, rows) {
        if (err) return console.log(err)

        const lastIdeias = []

        for (let ideia of rows) {
            if (lastIdeias.length <= 2) {
                lastIdeias.push(ideia)
            }
        }

        return response.render("index.html", { ideias: lastIdeias })
    })
})

server.get("/ideias", function (request, response) {

    db.all(`SELECT * FROM ideias`, function (err, rows) {
        if (err) {
            console.log(err);
            return response.send("Erro no Banco de Dados")
        }

        return response.render("ideias.html", { ideias: rows })
    })
})

server.post("/", function (request, response) {

    const query = `
    INSERT INTO ideias (
        image,
        title,
        category,
        description,
        link
    ) VALUES (?,?,?,?,?); `

    const values = [
        request.body.image,
        request.body.title,
        request.body.category,
        request.body.description,
        request.body.link
    ]

    db.run(query, values, function (err) {
        if (err) {
            console.log(err);
            return response.send("Erro no Banco de Dados")
        }

        return response.redirect("/ideias")
    })
})

//definindo porta para rodar o server
server.listen(3333)