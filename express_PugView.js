// Övning med cookies
const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

app.set('Vsiews', './Views');
app.set('view engine', 'pug').

app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.listen(port, () =>  console.log(`Example app listening on port ${port}!`));