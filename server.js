//utilizando express para configurar servidor
const express = require("express")
const server = express()

server.use(express.static("public"))

//nunjucks config
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true, //noChace serve para não armazenar em memoria cache, evita problemas em relação a mudanças em CSS
})

//ideias em array
const ideias = [
    {
        urlImg: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de programação",
        category: "Estudos",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum accusantium tenetur",
        url: "https://www.rocketseat.com.br"
    },
    {
        urlImg: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum accusantium tenetur",
        url: "https://www.rocketseat.com.br"
    },
    {
        urlImg: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Exercício Mental",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum accusantium tenetur",
        url: "https://www.rocketseat.com.br"
    },
    {
        urlImg: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaokê",
        category: "Diversão em Família",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum accusantium tenetur",
        url: "https://www.rocketseat.com.br"
    },
    {
        urlImg: "https://image.flaticon.com/icons/svg/2729/2729042.svg",
        title: "Filmes e Séries",
        category: "Entreterimento",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum accusantium tenetur",
        url: "https://www.rocketseat.com.br"
    },
    {
        urlImg: "https://image.flaticon.com/icons/svg/2729/2729054.svg",
        title: "Cuidados com Animais domésticos",
        category: "Cuidados Domésticos",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum accusantium tenetur",
        url: "https://www.rocketseat.com.br"
    },
]

//definindo rotas e capturando e retornando pedido pro cliente
server.get("/", function (request, response) {

    const lastIdeias = []
    for (let ideia of ideias) {
        if (lastIdeias.length <= 2) {
            lastIdeias.push(ideia)
        }
    }

    return response.render("index.html", { ideias: lastIdeias })
})

server.get("/ideias", function (request, response) {
    return response.render("ideias.html", { ideias })
})


//definindo porta para rodar o server
server.listen(3333)