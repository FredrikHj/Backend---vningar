// Övning med routes     
const express = require('express');
const app = express();
const fileSystem = require('fs');
app.use(express.json());
const port = 3000;

let movieList = require('./express_JSON_API-RestAPI.json');

// Gets all movies =================================================
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

// Create a new movie ===============================================
let countID = 0;
function createID() { 
    for (let index = 0; index < movieList.data.length; index++) {
        let idMax = movieList.data[index];
        countID = idMax.id;
    }
    // Get the last id in my arr of movies
    console.log('Id innan förändring');
    console.log(parseInt(countID));
    
    countID++;
    console.log('44');
    console.log(countID);
    
    return countID;
}
app.post('/Movie', (req, res) => {
    console.log('Ny post');
    createID();
    console.log(req.body);
    

    let objForm = {
        id: createID(),
        name: req.body.name,
        rating: req.body.rating,
    };
    movieList.data.push(objForm);
    // Save the movies in an json file
    fileSystem.writeFile('express_JSON_API-RestAPI.json', JSON.stringify(objForm), function(err) {
        
    });
   
    res.send(movieList);
    
});
// Update a movie ================================================
app.put('/Movie/:id', (req, res) => {

});
// Delete a movie ================================================
app.delete('/Movie/:id', (req, res) => {

});

 app.listen(port, () =>  console.log(`Example app listening on port ${port}!`));