// Övning med routes     
const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

let movieList = {data:
    [
        {id: 0, name: "Die Hard", Rating: 3},
        {id: 1, name: "Titanic", Rating: 5}, 
        {id: 2, name: "The Rain", Rating: 4}
    ]
};

// Gets all movies
app.get('/Movie', (req, res) => {
    console.log(req.body);
    
    console.log(movieList);
    res.send(movieList);
});
// Gets a specific movis
app.get('/Movie/:id', (req, res) => {
    let sendItem;
    let idToNr = parseInt(req.params.id);
    // Get movie ID
    let movieItem = movieList.data.find((obj) => {
        if (idToNr === obj.id) {
            sendItem = obj;
        }        
    });

    res.send(sendItem);
});
app.post('/Movie', (req, res) => {

});
app.put('/Movie', (req, res) => {

});
app.delete('/Movie', (req, res) => {

});


 app.listen(port, () =>  console.log(`Example app listening on port ${port}!`));