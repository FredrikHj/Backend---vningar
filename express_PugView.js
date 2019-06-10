// Övning med cookies
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }
        ));
const port = 3000;
let movieListaArr = [];

app.set('Views', './Views');
app.set('view engine', 'pug');

app.post('/', (req, res) => {
    console.log(req.body.movies);
    movieListaArr.push(req.body.movies);
    
    res.redirect('/');
    res.status(200).end();
});
app.get('/', (req, res) => {
    res.render('index', { title: 'Filmer', headline: 'Filmer', lista: movieListaArr });
});

app.listen(port, () =>  console.log(`Example app listening on port ${port}!`));