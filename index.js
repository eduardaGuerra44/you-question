const express = require('express'); 
const app = express();
const bodyParser = require('body-parser')
const connection = require('./database/database')

connection.authenticate().then(()=>{ console.log("conexão feita com o db")}).catch((msgerro)=>{console.log(msgerro)})

//configirando ejs 
app.set('view engine', 'ejs')
//configurando arquivo estático
app.use(express.static('public'))

// //bodyParser
app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json)


// rotas 
app.get('/', (req, res) => res.render("index.ejs"))
app.get('/perguntar', (req, res)=> res.render('perguntar.ejs')  )

//rota que recebe infos do formulário
app.post("/salvarpergunta", (req, res) => {
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;
    res.send(`Nova Pergunta: ${titulo} " " descrição ${descricao} " " `)})

app.listen(3000, ()=> console.log('app rodando'))