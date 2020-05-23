const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./data.db")

db.serialize(function () {

    //criar tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS ideias (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
    `)

    // INSERIR DADOS
    // const query = `
    // INSERT INTO ideias (
    //     image,
    //     title,
    //     category,
    //     description,
    //     link
    // ) VALUES (?,?,?,?,?); `

    // const values = [
    //     "https://image.flaticon.com/icons/svg/2729/2729007.svg",
    //     "Cursos de programação",
    //     "Estudos",
    //     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum accusantium tenetur",
    //     "https://www.rocketseat.com.br"
    // ]

    // db.run(query, values, function (err) {
    //     if (err) return console.log(err)

    //     console.log(this);
    // })

    //consultar dados
    // db.all(`SELECT * FROM ideias`, function (err, rows) {
    //     if (err) return console.log(err);

    //     console.log(rows);
    // })

    //deletar dados
    // db.run(`DELETE FROM ideias WHERE id = ?`, [5], function (err) {
    //     if (err) return console.log(err);

    //     console.log("Deletado com Sucesso");


    // })

})

module.exports = db