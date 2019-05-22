// Övning med routes     
const express = require('express');
const app = express();
const fileSystem = require('fs');
app.use(express.json());
const port = 3000;

let movieList = {data:
    [
        {id: 1, name: "Die Hard", rating: 3},
        {id: 2, name: "Titanic", rating: 5}, 
        {id: 3, name: "The Rain", rating: 4},
    ]
};
// Gets all movies
app.get('/Movie', (req, res) => {    
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


// Create a new movie
let countID = 0;
function createID() {    
    for (let index = 0; index < movieList.data.length; index++) {
        const idMax = movieList.data[index];
        countID = idMax.id;        
    }
    // Get the last id in my arr of movies
    countID += 1;
    console.log(countID);
    return countID;
}
app.post('/Movie', (req, res) => {
    console.log('Ny ' + createID());
    let incommingPostData = {
        id: createID(),
        name: req.body.name,
        rating: req.body.rating,
    };    
    movieList.data.push(incommingPostData);
    // Save the movies in an json file
    fileSystem.appendFile('express_JSON_API-RestAPI.json', JSON.stringify(incommingPostData), function(err) {
        
    })
    
    res.send(movieList);
    
});
// Update a movie
app.put('/Movie/:id', (req, res) => {

});
// Delete a movie
app.delete('/Movie/:id', (req, res) => {

});

 app.listen(port, () =>  console.log(`Example app listening on port ${port}!`));