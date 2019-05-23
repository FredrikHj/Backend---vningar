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
    let countItem = 0;
    let getItem;
    let idToNr = parseInt(req.params.id);

    console.log('Inkommande ID: '+ idToNr);
    
    // Get movie object
    movieList.data.find((obj, idx) => {
        countItem++;
        if (idToNr === countItem) {
            console.log('Item nr');
            getItem = movieList.data[idx];
            console.log(getItem);
            
        }      
    });

    console.log('Objekt visas');
    console.log(getItem);
    
    res.send(getItem);
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

    let objForm = {
        id: JSON.stringify(createID()),
        name: req.body.name,
        rating: req.body.rating,
    };
    movieList.data.push(objForm);
    console.log(movieList);
    
    // Save the movies in an json file
   fileSystem.writeFile('express_JSON_API-RestAPI.json', JSON.stringify(movieList //debugging
     , null, 2
    ), function(err) {
        console.log(err);
        
    });
   
    res.send(movieList);
});
// Update a movie ================================================
app.put('/Movie/:id', (req, res) => {
    console.log('Uppdatera film: ');
    let countItem = 0;
    let updateObj = {};
    let updateItem;

    let idToNr = parseInt(req.params.id);
    console.log('Inkommande ID: '+ idToNr);
   
    // Get movie object to update
    movieList.data.find((obj, idx) => {
        countItem++;
        if (idToNr === countItem) {
            getItem = movieList.data[idx];
            console.log('Update Item');
            
            updateObj = {
                id: movieList.data[idx].id,
                name: req.body.name,
                rating: req.body.rating,  
            };
            let newItemList = [ ...movieList.data.slice(0, idx),  ...movieList.data.slice(idx + 1)];
            console.log(newItemList);

            console.log('Innan');
            console.log(movieList.data);
            
            console.log('Efter');
            console.log(updateObj);
            
            movieList.data.push(updateObj);
            
            // Save the movies in an json file
            fileSystem.writeFile('express_JSON_API-RestAPI.json', JSON.stringify(newItemList //debugging
             , null, 2
            ), function(err) {
                console.log(err);
                
            });
            res.send(newItemList);
        }      
    });
});
// Delete a movie ================================================
app.delete('/Movie/:id', (req, res) => {

});

 app.listen(port, () =>  console.log(`Example app listening on port ${port}!`));