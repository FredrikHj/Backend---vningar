// Övning med cookies
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }
        ));
const port = 3000;
let movie = '';
//let listArr = ['efw'];

app.set('Views', './Views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', { title: 'Filmer', headline: 'Filmer', lista: movie });
});

app.post('/', (req, res) => {
    let movie = req.body.movies; 
    //listArr.push(req.body.movies);    
});


app.listen(port, () =>  console.log(`Example app listening on port ${port}!`));